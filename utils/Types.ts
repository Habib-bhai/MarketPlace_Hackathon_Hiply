
export interface Data {
    _id: string
    name: string,
    price: number,
    description: string,
    image: string,
    category: string,
    discountPercent: number,
    new: boolean,
    colors: string[],
    sizes: string[],
    tags: string[],
    stock: number,
    reviews: number
}