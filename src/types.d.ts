interface NavItem {
    to: string,
    text: string,
}

interface Category {
    id: number,
    name: string,
    image: string
}

interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: Category,
    images: Array<string>,
    state: string
}

interface Order {
    products: Product[] | [],
    totalProducts: number,
    totalPrice: number,
    date: Date
}
