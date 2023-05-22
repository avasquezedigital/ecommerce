import React, { useContext } from 'react'
import ShoppingCartContext from '../../../../context/Context'
import { XMarkIcon, MinusIcon } from '@heroicons/react/24/outline'


function MiniCart() {
    const { clearCart, cartOpen, cartProducts, toggleCart, removeProductToCart, totalPrice} = useContext(ShoppingCartContext);
    return (
        <div className={
            ` ${cartOpen ? 'visible' : 'hidden'} flex flex-col gap-4 items-center absolute z-10 w-60 top-24 right-0 bg-slate-800 py-8 px- 4 rounded-xl drop-shadow-xl`
        }>
            <span onClick={e => toggleCart(e)}> <XMarkIcon className='absolute top-4 right-4 w-4 h-4 cursor-pointer bg-slate-400 rounded-full text-slate-800 grid place-content-center drop-shadow-xl' /> </span>
            <ul className='h-[200px] overflow-y-auto p-6'>
                {
                    cartProducts.length > 0
                        ?
                        cartProducts.map((product: Product) => (
                            <li key={product.id} className='relative flex flex-row gap-4 items-center  my-3 py-2 px-1 border-b border-slate-300/10 rounded-lg'>
                                <span onClick={e => removeProductToCart(e, product.id)}> <MinusIcon className='absolute top-0 left-0 w-3 h-3 cursor-pointer bg-slate-400 rounded-full text-slate-800 grid place-content-center drop-shadow-xl' /> </span>
                                <figure className='w-1/2'>
                                    <img src={product.images[0]} alt="" className='w-10 h-10 object-cover rounded-md m-0' />
                                </figure>
                                <div className='flex flex-col items-start justify-between w-1/2'>
                                    <h6 className='text-xs pb-2 text-slate-200 font-semibold'> {product.title}</h6>
                                    <span className=' text-xs'> ${product.price}</span>
                                </div>
                            </li>
                        ))
                        : <p> No hay productos añadidos</p>
                }
            </ul>
            <div className='flex flex-row justify-between w-full px-12'>
                <h6>Total:</h6>
                <span>{totalPrice}</span>
            </div>
            {
                cartProducts.length > 0 &&
                <button onClick={clearCart} className="w-1/2 h-8 rounded-lg bg-lime-400 place-content-center flex flex-row gap-3 items-center transition-colors hover:bg-lime-200 text-sm font-semibold text-slate-800">
                    Clear
                </button>
            }
        </div>
    )
}

export default MiniCart