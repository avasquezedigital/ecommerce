import { useState, useEffect, useContext } from "react";
import CardList from "../../components/CardList"
import Layout from "../../layout/Layout"
import { getProducts } from "../../services/API";
import ShoppingCartContext from "../../context/Context";
import ProductDetail from "../../components/Product/ProductDetail";

function Home() {
  const { setProducts, products } = useContext(ShoppingCartContext);
  return (
    <Layout title="Inicio">
      <CardList products={products} />
      <ProductDetail />
    </Layout>
  )
}

export default Home