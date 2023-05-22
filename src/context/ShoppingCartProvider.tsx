import { useReducer } from "react";
import ShoppingCartContext from './';
import { ShoppingCartState } from "./interfaces";
import { shoppingCartReducer } from "./shoppingCartReducer";

const defaultProducts: Product[] = [
    {
        id: 1,
        title: "Handmade Fresh Table",
        price: 687,
        description: "Andy shoes are designed to keeping in...",
        category: {
            id: 5,
            name: "Others",
            image: "https://placeimg.com/640/480/any?r=0.591926261873231"
        },
        images: [
            "https://placeimg.com/640/480/any?r=0.9178516507833767",
            "https://placeimg.com/640/480/any?r=0.9300320592588625",
            "https://placeimg.com/640/480/any?r=0.8807778235430017"
        ]
    }
];

const INITIAL_STATE: ShoppingCartState = {
    products: defaultProducts,
    cart: []
}

type ProviderProps = {
    children: React.JSX.Element | React.JSX.Element[]
}

const ShoppingCartProvider = ({ children }: ProviderProps) => {
    const [shoppingCartState, dispatch] = useReducer(shoppingCartReducer, INITIAL_STATE);
    const updateProducts = (products: Product[]) => {
        dispatch({ type: 'allProducts', payload: products });
    }
    return (
        <ShoppingCartContext.Provider value={{
            shoppingCartState,
            updateProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider;