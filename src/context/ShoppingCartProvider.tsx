import { useEffect, useState } from 'react';
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
    const [cartOpen, setCartOpen] = useState<boolean>(false)
    const [cartProducts, setCartProducts] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
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

    const updateTotal = () => {
        let total: number = 0;
        for (const product of cartProducts) {
            total += product.price
        }
        setTotalPrice(total);
    }

    const addProductToCart = (e: React.MouseEvent<HTMLElement, MouseEvent>, product: Product) => {
        e.stopPropagation();
        const updateProducts: Product[] = [...products];
        const indexProduct: number = updateProducts.findIndex((p: Product) => p.id === product.id);
        updateProducts[indexProduct].state = 'added';
        setProducts([...updateProducts]);
        setCartProducts([...cartProducts, product])
        setCartOpen(true)
    }

    const removeProductToCart = (e: React.MouseEvent<HTMLElement, MouseEvent>, id: number) => {
        e.stopPropagation();
        const copyCart: Product[] = [...cartProducts];
        const updateProducts: Product[] = [...products];
        const filterCartProducts = copyCart.filter(productItem => productItem.id !== id);
        setCartProducts([...filterCartProducts])

        //Update general products
        const indexProduct: number = updateProducts.findIndex((p: Product) => p.id === id);
        updateProducts[indexProduct].state = 'default';
        setProducts([...updateProducts]);
    }

    const clearCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        const copyProducts = [...products];
        const updateProducts = copyProducts.map((product: Product) => {
            return { ...product, state: 'default' }
        })
        setProducts(updateProducts);
        setCartProducts([]);
        setCartOpen(false);
    }

    const toggleCart = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        let isOpen = cartOpen;
        setCartOpen(isOpen ? false : true)
    }

    useEffect(() => {
        updateTotal();
    }, [addProductToCart, removeProductToCart])


    return (
        <ShoppingCartContext.Provider value={{
            products,
            setProducts,
            cartOpen,
            cartProducts,
            setCartProducts,
            productDetail,
            openProductDetail,
            closeProductDetails,
            addProductToCart,
            removeProductToCart,
            clearCart,
            toggleCart,
            totalPrice
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider;