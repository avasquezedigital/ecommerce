import CardList from "../../../components/CardList"
import Layout from "../../../layout/Layout"
import ProductDetail from "../../../components/Product/ProductDetail";
import { useLocation } from "react-router-dom";

function Category(): React.JSX.Element {
    const location = useLocation();
    const getCurrentLocation = () => {
        const path: string = location.pathname;
        const findId: number = path.lastIndexOf('/') + 1;
        const idCategory: string = path.slice(findId, path.length);
        return idCategory;
    }
    return (
        <Layout title={`${getCurrentLocation()}`}>
            <CardList location={getCurrentLocation()} />
            <ProductDetail />
        </Layout>
    )
}

export default Category