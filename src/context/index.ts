import { createContext } from "react";
import { ShoppingCartState } from "./interfaces";

export type TodoContextProps = {
    shoppingCartState: ShoppingCartState,
    updateProducts: ( products: Product[] ) => void
}

const ShoppingCartContext = createContext<TodoContextProps>({} as TodoContextProps);

export default ShoppingCartContext;
