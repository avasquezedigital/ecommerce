import { useState, useEffect } from "react";
import CardList from "../../components/CardList"
import Layout from "../../layout/Layout"
import { API_URL, fetchAPI } from "../../services/API";

function Home() {
  const [products, setProducts] = useState<Product[]>([
    {
      "id": 4,
      "title": "Handmade Fresh Table",
      "price": 687,
      "description": "Andy shoes are designed to keeping in...",
      "category": {
        "id": 5,
        "name": "Others",
        "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
      },
      "images": [
        "https://placeimg.com/640/480/any?r=0.9178516507833767",
        "https://placeimg.com/640/480/any?r=0.9300320592588625",
        "https://placeimg.com/640/480/any?r=0.8807778235430017"
      ]
    }
  ]);

  const getProducts = async () => {
    try {
      const params = {
        url: API_URL,
        offset: 0,
        limit: 10
      }
      const response = await fetchAPI(params);
      const dataProducts = await response.json();
      console.log(dataProducts);
      
      const sort = dataProducts.sort((a: Product, b: Product) => a.id - b.id)
      console.log(sort);
      setProducts(sort);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
    return () => { }
  }, [])

  return (
    <Layout title="Inicio">
      <CardList products={products} />
    </Layout>
  )
}

export default Home