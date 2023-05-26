import { useContext, useEffect, useState } from 'react';
import ShoppingCartContext from "../../../context/Context";
import Layout from "../../../layout/Layout";
import OrderCard from '../../../components/Orders/OrderCard/OrderCard';
import { Link, Location, useLocation } from 'react-router-dom';

function Order(): React.JSX.Element {
  const { orders } = useContext(ShoppingCartContext);
  const [currentOrder, setCurrentOrder] = useState<Order>(orders[orders.length - 1]);
  const location: Location = useLocation();
  const getCurrentOrder = () => {
    const path: string = location.pathname;
    const findId: number = path.lastIndexOf('/') + 1;
    const idOrder: string = path.slice(findId, path.length);
    const dataOrder = orders.filter(order => order.id === idOrder);
    setCurrentOrder(dataOrder[0]);
  }

  useEffect(() => {
    if (orders.length > 0) getCurrentOrder();
  }, [])

  return (
    <Layout title={`My order`} description='Aliqua sit qui dolore fugiat sunt eu ipsum. Fugiat veniam duis ullamco cupidatat irure ea amet. Adipisicing qui proident velit consectetur. Aute irure minim qui occaecat quis laborum.' >
      <section className='flex flex-col items-center'>
        {
          orders.length > 0 ?
            <OrderCard order={currentOrder} />
            : <p className='p-10 text-slate-500'> No existe una orden con ese ID</p>
        }
        <Link to="/my-orders" className='w-1/2 h-8 rounded-lg bg-lime-400 place-content-center flex flex-row gap-3 items-center transition-colors hover:bg-lime-200 text-sm font-semibold text-slate-800'>
          My orders
        </Link>
      </section>
    </Layout>
  )
}

export default Order