import { useState } from 'react';
import ShoppingCartContext from './Context';
import { INITIAL_STATE } from '../utils/initial_values';

type ProviderProps = {
    children: React.JSX.Element | React.JSX.Element[]
}

export interface ProductDetail {
    isOpen: boolean,
    details: Product
}

const ShoppingCartProvider = ({ children }: ProviderProps) => {
    const [cartProducts, setCartProducts] = useState<Product[]>([]);
    const [products, setProducts] = useState<Product[]>(INITIAL_STATE);
    const [productDetail, setProductDetail] = useState<ProductDetail>({
        isOpen: false,
        details: products[0]
    })
    const openProductDetail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: Product) => {
        e.stopPropagation();
        setProductDetail({ isOpen: true, details: product });
    }
    const closeProductDetails = () => {
        setProductDetail({ isOpen: false, details: products[0] });
    }

    return (
        <ShoppingCartContext.Provider value={{
            products,
            setProducts,
            cartProducts,
            setCartProducts,
            productDetail,
            openProductDetail,
            closeProductDetails
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider;