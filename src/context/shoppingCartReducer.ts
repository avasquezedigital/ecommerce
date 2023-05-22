import { ShoppingCartState } from "./interfaces";

type ShoppingCartAction =
    | { type: 'addProduct', payload: Product }
    | { type: 'removeProduct', payload: { id: number } }
    | { type: 'toggleProduct', payload: { id: number } }
    | { type: 'allProducts', payload: Product[] };

export const shoppingCartReducer = (state: ShoppingCartState, action: ShoppingCartAction) => {
    switch (action.type) {
        case 'addProduct':
            return { ...state, cart: [...state.cart, action.payload] }
        case 'removeProduct':
            return state
        case 'toggleProduct':
            return state
        case 'allProducts':
            return { ...state, products: [...state.products, action.payload] }
        default:
            return state;
    }
}