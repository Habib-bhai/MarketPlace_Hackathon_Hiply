"use client"
import { useState, useEffect } from 'react'
import { Heart, Share2, Minus, Plus, ShoppingCart, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ZoomImage } from './ZoomImage'
import { SizeGuide } from './SizeGuide'
import { motion, AnimatePresence } from 'framer-motion'
import { urlFor } from '@/sanity/lib/image'
import { useCart } from '@/context/CartContext'
import { toast } from "sonner"
import { useWishlist } from '@/context/WishlistContext'
import { Data } from '../../utils/Types'



export default function ProductDetailsDynamicPageStructure({ SanityData }: { SanityData: Data }) {

    const [selectedImage] = useState("")
    const [selectedColor, setSelectedColor] = useState<string | null>(SanityData?.colors?.[0] || null)
    const [selectedSize, setSelectedSize] = useState<string | null>(SanityData?.sizes?.[0] || null)
    const [quantity, setQuantity] = useState(SanityData.price) //have to update this as well
    const [isAddedToCart, setIsAddedToCart] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    const [data] = useState<Data>(SanityData)
    const [sizePrice, setSizePrice] = useState(0)
    const [, setShowStockAlert] = useState(false)

    const basePrice = data?.price || 0
    const finalPrice = basePrice + sizePrice

    const { addItem } = useCart()
    const { state: wishlistState, addItem: addToWishlist, removeItem: removeFromWishlist } = useWishlist()


    const getPriceIncrement = (size: string) => {
        const normalizedSize = size.toLowerCase();
        if (normalizedSize === 'xl') return 5;
        if (normalizedSize === '2xl' || normalizedSize === 'xxl') return 10;
        return 0;
    };

    const handleSizeSelect = (size: string) => {
        setSelectedSize(size);
        setSizePrice(getPriceIncrement(size));
    };


    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity > (SanityData.price)) {
            setShowStockAlert(true);
            setTimeout(() => setShowStockAlert(false), 3000);
        } else {
            setQuantity(newQuantity);
        }
    };


    useEffect(() => {
        setQuantity(1);
    }, [selectedSize]);

    useEffect(() => {
        setIsFavorite(wishlistState.items.some(item => item.id === data._id));
    }, [wishlistState, data._id]);

    const handleAddToCart = () => {
        if (data && selectedSize) {
            addItem({
                id: `${data._id}`,
                name: `${data.name} (${selectedSize})`,
                price: finalPrice,
                image: data.image ? urlFor(data.image).url() : "",
                quantity: quantity,
                size: selectedSize,
                stock: data.stock
            });
            setIsAddedToCart(true);
            toast("Product added to cart");
            setTimeout(() => setIsAddedToCart(false), 2000);
        }
    };


    const handleToggleWishlist = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isFavorite) {
            removeFromWishlist(SanityData._id);
            toast.success(`${SanityData.name} removed from wishlist`);
        } else {
            addToWishlist({
                id: data._id,
                name: data.name,
                price: data.price,
                image: data.image ? urlFor(data.image).url() : ""

            });
            toast.success(`${data.name} added to wishlist`);
        }
        setIsFavorite(!isFavorite);
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Brand Badge */}
                    {data?._id && (
                        <div className="mb-6">
                            <Badge variant="outline" className="text-sm">
                                {data._id}
                            </Badge>
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Image Gallery */}
                        <div className="space-y-4">
                            <ZoomImage
                                src={data?.image && data.image ? urlFor(data.image).url() : ""}
                                alt={`Product image ${selectedImage + 1}`}
                            />
                            {/* <div className="grid grid-cols-4 gap-4">
                            <button
                                
                                onClick={() => setSelectedImage(data.name)}
                                className={`relative aspect-square overflow-hidden rounded-lg transition-all duration-200 
                    ${selectedImage === data.name
                                        ? 'ring-2 ring-primary scale-95 opacity-100'
                                        : 'hover:scale-95 opacity-60 hover:opacity-100'}`}
                            >
                                <Image
                                    src={urlFor(image).url()}
                                    alt={`Product view ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </button>

                        </div> */}
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6">
                            {/* Product Header */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 flex-wrap">
                                    {data?.new && (
                                        <Badge variant="destructive" className="text-sm">NEW</Badge>
                                    )}
                                    {data?.price > 200 && (
                                        <Badge variant="default" className="text-sm">PREMIUM</Badge>
                                    )}
                                    {/* have to add the stock or quantity field in the schema, so, temporarily using price */}

                                    {data?.price && data.price < 5 && (
                                        <Badge variant="secondary" className="text-sm">
                                            Only {data.price} left
                                        </Badge>
                                    )}
                                </div>

                                {/* Product Name */}
                                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                                    {data?.name || 'Loading...'}
                                </h1>

                                {/* Reviews */}
                                {/* have to add the reviews field in the schema as well, temporarily using price */}
                                {data?.reviews !== undefined && (
                                    <div className="flex items-center space-x-2">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-5 h-5 ${i < Math.floor(data.reviews / 20) ? 'fill-current' : 'fill-gray-300'}`}
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-500">({data.reviews} Reviews)</span>
                                    </div>
                                )}

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {data?.description || 'Loading description...'}
                                </p>
                            </div>

                            {/* Price Display */}
                            <motion.div
                                className="flex items-center space-x-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                key={finalPrice}
                            >
                                <span className="text-4xl font-bold">${finalPrice.toFixed(2)}</span>
                                <span className="text-lg text-gray-500 line-through">
                                    ${(finalPrice * 1.7).toFixed(2)}
                                </span>
                            </motion.div>

                            {/* Color Selection */}
                            {data?.colors && (
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">
                                            Color: {selectedColor || 'Select Color'}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {data.colors.map((color, index) => (
                                            <Button
                                                key={index}
                                                variant={selectedColor === color ? "default" : "outline"}
                                                onClick={() => setSelectedColor(color)}
                                            >
                                                {color}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Size Selection */}
                            {data?.sizes && data.sizes.length > 0 && (
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">Size</span>
                                        <SizeGuide />
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {data.sizes.map((size, index) => {
                                            const priceIncrement = getPriceIncrement(size);
                                            return (
                                                <Button
                                                    key={index}
                                                    variant={selectedSize === size ? "default" : "outline"}
                                                    onClick={() => handleSizeSelect(size)}
                                                    className="min-w-[3rem] relative"
                                                >
                                                    {size.toUpperCase()}
                                                    {priceIncrement > 0 && (
                                                        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-1 rounded">
                                                            +${priceIncrement}
                                                        </span>
                                                    )}
                                                </Button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Quantity Selection */}
                            {/* have to add the quantity field in the schema, temporarily using price */}
                            <div className="space-y-2 ">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">Quantity</span>
                                    <span className="text-sm text-gray-500">
                                        {data?.stock ? `${data.stock} in stock` : 'Out of stock'}
                                    </span>
                                </div>

                                <div className="flex  md:flex-row flex-col items-start md:items-center gap-4 flex-wrap">
                                    <div className="flex items-center border rounded-xl overflow-hidden">
                                        <button
                                            onClick={() => handleQuantityChange(quantity - 1)}
                                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                            disabled={quantity <= 1}
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="px-4 py-2 border-x min-w-[3rem] text-center">
                                            {quantity}
                                        </span>
                                        <button
                                            onClick={() => handleQuantityChange(quantity + 1)}
                                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                            disabled={quantity >= (data?.price || 0)}
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <Button
                                        className=" flex md:flex-1 w-32 md:w-auto  md:h-12 rounded-xl relative overflow-hidden"
                                        onClick={handleAddToCart}
                                        disabled={!data?.price || data.price === 0}
                                    >
                                        <AnimatePresence>
                                            {isAddedToCart ? (
                                                <motion.div
                                                    key="added"
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: -20, opacity: 0 }}
                                                    className="absolute inset-0 flex items-center justify-center gap-2"
                                                >
                                                    <Check className="w-4 h-4" /> Added to Cart
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="add"
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: -20, opacity: 0 }}
                                                    className="absolute inset-0 flex items-center justify-center gap-2"
                                                >
                                                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </Button>

                                    {/* Favorite and Share Buttons */}
                                    <div className='flex gap-5'>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="h-12 w-12 rounded-xl"
                                            onClick={handleToggleWishlist}
                                        >
                                            <Heart
                                                className={`w-4 h-4 transition-colors ${isFavorite ? 'fill-red-500 stroke-red-500' : ''
                                                    }`}
                                            />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="h-12 w-12 rounded-xl"
                                        >
                                            <Share2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Stock Alert */}
                            {/* <AnimatePresence>
                            {showStockAlert && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Alert variant="destructive">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>Out of Stock</AlertTitle>
                                        <AlertDescription>
                                            The selected quantity exceeds our current stock. Please reduce the quantity.
                                        </AlertDescription>
                                    </Alert>
                                </motion.div>
                            )}
                        </AnimatePresence> */}


                            {/* Product Details */}
                            <div className="space-y-2 pt-4 border-t">
                                <div className="flex space-x-2 text-sm">
                                    <span className="font-medium">Brand:</span>
                                    <span className="text-gray-600 dark:text-gray-300">{data?._id || 'N/A'}</span>
                                </div>
                                <div className="flex space-x-2 text-sm">
                                    <span className="font-medium">Category:</span>
                                    <span className="text-gray-600 dark:text-gray-300">{data?.category || 'N/A'}</span>
                                </div>
                                {data?.tags && data.tags.length > 0 && (
                                    <div className="flex space-x-2 text-sm">
                                        <span className="font-medium">Tags:</span>
                                        <div className="flex flex-wrap gap-1">
                                            {
                                                data.tags.map((item) => (<Badge key={item} variant="secondary" className="text-xs">
                                                    {data.category}
                                                </Badge>))

                                            }
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Inventory Status */}
                            {data?.price !== undefined && (
                                <div className="pt-4">
                                    <Badge
                                        variant={data.price > 10 ? "default" : data.price > 0 ? "secondary" : "destructive"}
                                        className="text-sm"
                                    >
                                        {data.price > 10 ? 'In Stock' :
                                            data.price > 0 ? `Only ${data.price} left` : 'Out of Stock'}
                                    </Badge>
                                </div>
                            )}

                            {/* Shipping Info */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Badge variant="secondary" className="text-sm h-12 px-6">
                                    ⚡ Free Shipping
                                </Badge>
                                <Badge variant="secondary" className="text-sm h-12 px-6">
                                    🔄 Easy Returns
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </>

    )
}
