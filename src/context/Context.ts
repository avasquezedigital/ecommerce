import React, { createContext } from "react";
import { ProductDetail } from "./ShoppingCartProvider";

export interface ShoppingCart {
    products: Product[],
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
    cartProducts: Product[],
    setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>,
    productDetail: ProductDetail,
    openProductDetail: (e: any, product: Product) => void,
    closeProductDetails: () => void
}

const ShoppingCartContext = createContext<ShoppingCart>({} as ShoppingCart);

export default ShoppingCartContext;
