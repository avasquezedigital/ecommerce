import React, { createContext } from "react";
import { ProductDetail } from "./ShoppingCartProvider";

export interface ShoppingCart {
    products: Product[],
    defaultProducts: Product[],
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
    cartOpen: boolean,
    cartProducts: Product[],
    setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>,
    productDetail: ProductDetail,
    openProductDetail: (e: any, product: Product) => void,
    closeProductDetails: () => void,
    addProductToCart: (e: React.MouseEvent<HTMLElement, MouseEvent>, product: Product) => void,
    removeProductToCart: (e: React.MouseEvent<HTMLElement, MouseEvent>, id: number) => void,
    clearCart: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    toggleCart: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
    totalPrice: number,
    checkoutOrder: (e: React.MouseEvent<HTMLElement, MouseEvent>, order: Order) => void,
    order: Order;
    orders: Order[];
}

const ShoppingCartContext = createContext<ShoppingCart>({} as ShoppingCart);

export default ShoppingCartContext;
