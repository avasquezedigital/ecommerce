import CardList from "../../components/CardList"
import Layout from "../../layout/Layout"
import ProductDetail from "../../components/Product/ProductDetail";

function Home() {
  return (
    <Layout title="Inicio">
      <CardList location={'/'} />
      <ProductDetail />
    </Layout>
  )
}

export default Home