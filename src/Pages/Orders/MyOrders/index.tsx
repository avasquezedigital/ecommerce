import { useContext } from "react"
import OrderList from "../../../components/Orders/OrderList/OrderList"
import Layout from "../../../layout/Layout"
import ShoppingCartContext, { ShoppingCart } from "../../../context/Context"

function MyOrders() {
  const { orders } = useContext<ShoppingCart>(ShoppingCartContext)
  return (
    <Layout title="My orders" description='Aliqua sit qui dolore fugiat sunt eu ipsum. Fugiat veniam duis ullamco cupidatat irure ea amet. Adipisicing qui proident velit consectetur. Aute irure minim qui occaecat quis laborum.' >
      <OrderList orders={orders} />
    </Layout>
  )
}

export default MyOrders