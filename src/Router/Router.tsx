
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound'
import Account from '../Pages/Account'
import MyOrders from '../Pages/Orders/MyOrders'
import Order from '../Pages/Orders/Order'
import SignIn from '../Pages/SignIn'


const AppRoutes = () => {
    const routes: Route[] = [
        {
            path: "/",
            element: <Home />
        },
        {
            path: 'account',
            element: <Account />,
        },
        {
            path: 'my-orders',
            element: <MyOrders />,
            children: [
                {
                    path: 'order',
                    element: <Order />,
                }
            ]
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
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default Router