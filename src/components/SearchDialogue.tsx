import React, {  SetStateAction, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from 'next/image';
import { createClient } from 'next-sanity';
import { useRouter } from 'next/navigation';

const client = createClient({
    // Add your Sanity configuration here
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2024-01-20',
    useCdn: true,
});



interface queryResult {
    _id: string;
    name: string,
    price: number,
    category: string,
    "imageUrl": string,
    description: string,
    tags: string[]
}



const SearchDialog = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const resultsPerPage = 4;
    const router = useRouter();

    const handleSearch = async () => {
        if (!searchQuery.trim()) return;

        setIsLoading(true);

        // GROQ query to search through products
        const query = `*[_type == "products" && (
      name match $searchQuery + "*" ||
      category match $searchQuery + "*" ||
      $searchQuery in tags[]
    )] {
      _id,
      name,
      price,
      category,
      "imageUrl": image.asset->url,
      description,
      tags
    }`;



        try {
            const results = await client.fetch(query, { searchQuery: searchQuery.toLowerCase() });
            setSearchResults(results);
            setCurrentPage(1);
        } catch (error) {
            console.error('Search error:', error);
            setSearchResults([]);
        } finally {
            setIsLoading(false);
        }
    };



    const paginatedResults: queryResult[] = searchResults.slice(
        (currentPage - 1) * resultsPerPage,
        currentPage * resultsPerPage
    );

    const totalPages = Math.ceil(searchResults.length / resultsPerPage);

    const handleProductClick = (productId: string) => {
        setOpen(false); // Close the dialog
        router.push(`/shop/${productId}`); // Navigate to product page
      };


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild className=''>
                <Image
                    src="/images/navbar/search.svg"
                    alt='search'
                    height={20}
                    width={20}
                    className="cursor-pointer h-[30px] w-[30px] md:h-[20px] md:w-[20px] object-cover"
                />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] ">
                <DialogHeader>
                    <DialogTitle className="text-xl font-montserrat mb-4">Search Products</DialogTitle>
                </DialogHeader>

                <div className="flex gap-2 mb-6">
                    <Input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        className="flex-1"
                    />
                    <Button
                        onClick={handleSearch}
                        className="bg-[#23A6F0] hover:bg-[#1a7ab3]"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Searching...' : 'Search'}
                    </Button>
                </div>

                <Image onClick={() => setSearchResults([])} src={"/images/bin.svg"} alt='clear' height={30} width={30} />

                {/* Results Section */}

                <div className="max-h-[400px]  md:max-h-[300px] xl:max-h-[500px] overflow-y-auto">
                    {/* bin to clear the search output */}
                    {paginatedResults.map((product) => (
                        <div
                            key={product._id}
                            className="my-4 flex gap-4 p-4 border rounded-lg hover:border-[#23A6F0] cursor-pointer"
                            onClick={() => handleProductClick(product._id)}
                        >
                            <div className="w-24 h-24 relative flex-shrink-0">
                                <Image
                                    src={product.imageUrl || '/placeholder.jpg'}
                                    alt={product.name}
                                    fill
                                    className="object-cover rounded-md"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-montserrat font-bold text-lg">{product.name}</h3>
                                <p className="text-[#737373] text-sm mb-1">Category: {product.category}</p>
                                <p className="text-[#23A6F0] font-bold">${product.price}</p>
                                {product.tags?.length > 0 && (
                                    <div className="flex gap-2 mt-2">
                                        {product.tags.map((tag: string, idx: number) => (
                                            <span
                                                key={idx}
                                                className="bg-gray-100 text-xs px-2 py-1 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {searchResults.length > resultsPerPage && (
                    <div className="flex justify-center gap-2 mt-4">
                        <Button
                            variant="outline"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </Button>
                        <span className="flex items-center px-4">
                            Page {currentPage} of {totalPages}
                        </span>
                        <Button
                            variant="outline"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </Button>
                    </div>
                )}

                {searchResults.length === 0 && searchQuery && !isLoading && (
                    <p className="text-center text-gray-500 my-8">
                        Click Search Button To Find your Desired Product
                    </p>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default SearchDialog;