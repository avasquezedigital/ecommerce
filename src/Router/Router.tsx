
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound'
import Account from '../Pages/Account'
import MyOrders from '../Pages/Orders/MyOrders'
import Order from '../Pages/Orders/MyOrder'
import SignIn from '../Pages/SignIn'
import Categories from "../Pages/Categories";
import ShoppingCartProvider from "../context/ShoppingCartProvider";


type Route = {
    path: string,
    element: JSX.Element,
    children?: Route[]
}

const AppRoutes = () => {
    const routes: Route[] = [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/categories",
            element: <Categories />
        },
        {
            path: '/account',
            element: <Account />,
        },
        {
            path: '/my-orders',
            element: <MyOrders />,
        },
        {
            path: '/my-orders/last',
            element: <Order />,
        },
        {
            path: '/my-orders/:id',
            element: <Order />,
        },
        {
            path: '/my-order',
            element: <Order />,
        },
        {
            path: '/sign-in',
            element: <SignIn />
        },
        {
            path: "*",
            element: <NotFound />
        }
    ];
    return useRoutes(routes);
}

function Router() {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </ShoppingCartProvider>
    );
}

export default Router