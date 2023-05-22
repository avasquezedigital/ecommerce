import { useContext } from "react"
import ShoppingCartContext from "../../context/Context";



function ProductDetail() {
    const { products, openProductDetail, productDetail, closeProductDetails } = useContext(ShoppingCartContext);
    return (
        <aside className={`${!productDetail.isOpen && 'hidden'} flex flex-col fixed w-[280px] z-20 h-screen right-0 top-24 p-10 bg-slate-900 text-slate-400 drop-shadow-2xl border-l-2 border-slate-800`}>
            <div className="flex flex-col">
                <figure>
                    <img src={productDetail.details.images[0]} alt="" className="h-42 rounded-lg object-cover" />
                </figure>
                <h2 className="text-2xl font-semibold py-4">{productDetail.details.title}</h2>
                <p className="text-xs">{productDetail.details.description}</p>
                <button onClick={() => closeProductDetails() } className="w-1/2 h-8 rounded-lg bg-lime-400 place-content-center flex flex-row gap-3 items-center transition-colors hover:bg-lime-200 text-sm font-semibold text-slate-800">
                    Close product
                </button>
            </div>
        </aside>
    )
}

export default ProductDetail