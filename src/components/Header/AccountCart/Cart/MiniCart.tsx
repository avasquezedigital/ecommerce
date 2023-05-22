import React from 'react'

type Props = {
    cartOpen: boolean,
    cartProducts: Product[],
    setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

function MiniCart({ cartOpen, cartProducts, setCartProducts }: Props) {
    return (
        <div className={
            ` ${cartOpen ? 'visible' : 'hidden'} flex flex-col gap-4 items-center absolute z-10 w-80 top-24 right-0 bg-slate-800 p-8 rounded-xl drop-shadow-xl`
        }>
            <ul>
                {
                    cartProducts.length > 0
                        ?
                        cartProducts.map((product: Product) => (
                            <li key={product.id} className=' flex flex-row gap-4 items-center bg-slate-700 my-3 p-6 rounded-lg'>
                                <figure>
                                    <img src={product.images[0]} alt="" className='w-12 h-12 object-cover rounded-md'/>
                                </figure>
                                <div>
                                    <h6 className='border-b border-slate-300/10 pb-2 text-xs'> {product.title}</h6>
                                    <span className='py-4 text-xs'> ${product.price}</span>
                                </div>
                            </li>
                        ))
                        : <p> No hay productos añadidos</p>
                }
            </ul>
            <button onClick={() => setCartProducts([])} className="w-1/2 h-8 rounded-lg bg-lime-400 place-content-center flex flex-row gap-3 items-center transition-colors hover:bg-lime-200 text-sm font-semibold text-slate-800">
                Clear
            </button>
        </div>
    )
}

export default MiniCart