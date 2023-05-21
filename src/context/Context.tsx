import { createContext, useState } from "react";


const defaultValue: Product[] = [];
export const ShoppingCartContext: React.Context<Product[]> = createContext(defaultValue);
type Props = {
    children: React.ReactNode
}
export const ShoppingCartProvider = ({ children }: Props) => {
    const [products, setProducts] = useState<Product[]>([]);

    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}