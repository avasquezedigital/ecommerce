import { Link } from "react-router-dom";
import OrderCard from "../OrderCard/OrderCard";

type Props = {
    orders: Order[]
};

function OrderList({ orders }: Props) {
    return (
        <div>
            {
                orders.length > 0 ?
                    orders.map((order, i) => (
                        <Link key={`${order.id}-${i}`} to={`/my-orders/${order.id}`}>
                            <div>
                                <OrderCard order={order} />
                            </div>
                        </Link>
                    )) :
                    <div className="flex flex-col items-center">
                        <p className="text-sm font-light text-slate text-slate-500 p-10 text-center"> No hay ordenes disponibles </p>
                        <Link to='/' className="w-1/2 h-8 rounded-lg bg-lime-400 place-content-center flex flex-row gap-3 items-center transition-colors hover:bg-lime-200 text-sm font-semibold text-slate-80">Ir al home</Link>
                    </div>
            }
        </div>
    )
}

export default OrderList