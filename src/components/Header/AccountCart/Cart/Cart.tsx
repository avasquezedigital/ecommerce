import React, { useState, useContext } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import ShoppingCartContext from '../../../../context/Context';
import MiniCart from './MiniCart';

function Cart() {

    const { cartProducts, setCartProducts, cartOpen, toggleCart } = useContext(ShoppingCartContext);
    return (
        <>
            <span onClick={e => toggleCart(e)} className='relative w-8 h-8 cursor-pointer bg-lime-400 rounded-full text-slate-800 grid place-content-center drop-shadow-xl'>
                <ShoppingCartIcon className="h-4 w-4 text-slate-800" />
                <span className='absolute bottom-6 left-0 w-4 h-4 bg-slate-600 rounded-full grid place-content-center drop-shadow-xl text-xs text-slate-100 '>{cartProducts.length}</span>
            </span>
            <MiniCart />
        </>

    )
}

export default Cart