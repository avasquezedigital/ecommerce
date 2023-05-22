import { useContext } from "react"
import { XMarkIcon, MinusIcon } from '@heroicons/react/24/outline'
import ShoppingCartContext from "../../context/Context";



function ProductDetail() {
    const { products, openProductDetail, productDetail, closeProductDetails } = useContext(ShoppingCartContext);
    return (
        <aside className={`${!productDetail.isOpen && 'hidden'} flex flex-col fixed w-[280px] z-20 h-screen right-0 top-24 p-10 bg-slate-900 text-slate-400 drop-shadow-2xl border-l-2 border-slate-800`}>
            <span onClick={() => closeProductDetails()}> <XMarkIcon className='absolute top-4 right-4 w-4 h-4 cursor-pointer bg-slate-400 rounded-full text-slate-800 grid place-content-center drop-shadow-xl' /> </span>
            <div className="flex flex-col justify-between">
                <div className="mb-10">
                    <figure>
                        <img src={productDetail.details.images[0]} alt="" className="h-42 rounded-lg object-cover" />
                    </figure>
                    <h2 className="text-2xl font-semibold py-4">{productDetail.details.title}</h2>
                    <p className="text-xs">{productDetail.details.description}</p>
                </div>
                <button onClick={() => closeProductDetails()} className="w-full h-8 rounded-lg bg-lime-400 place-content-center flex flex-row gap-3 items-center transition-colors hover:bg-lime-200 text-sm font-semibold text-slate-800">
                    Close product
                </button>
            </div>
        </aside>
    )
}

export default ProductDetail