import React, { useContext } from 'react'
import ShoppingCartContext from '../../../context/Context';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'

type Props = {
  product: Product
}

function Card({ product }: Props): React.JSX.Element {
  const { setCartProducts, cartProducts, openProductDetail, products, setProducts} = useContext(ShoppingCartContext);

  const addProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: Product) => {
    console.log('====================================');
    console.log('hola');
    console.log('====================================');
    const updateCartProducts: Product[] = [...cartProducts];
    const updateProducts: Product[] = [...products];

    const indexProduct: number = updateProducts.findIndex((p: Product) => p.id === product.id);
    updateProducts[indexProduct].state = 'added';

    setProducts([...updateProducts]);

  }

  const removeProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
    const copyCart: Product[] = [...cartProducts];
    const filterCartProducts = copyCart.filter(productItem => productItem.id !== id);
    setCartProducts([...filterCartProducts, product])
  }

  return (
    <article

      id={String(product.id)}
      className='card relative flex flex-col rounded-xl gap-3 bg-slate-800 border-2 border-slate-50/0 p-8 text-slate-400 cursor-pointer drop-shadow-lg'>
      <figure className='relative h-30' onClick={e => { openProductDetail(e, product) }}>
        <span className='category absolute top-2 left-2 z-10 bg-slate-100 py-1 px-2 text-xs rounded-md drop-shadow-sm'> {product.category.name} </span>
        <span className='absolute top-2 right-2 w-8 h-8 z-10 grid place-content-center bg-slate-800 py-1 px-2 text-xs rounded-full drop-shadow-sm'>c</span>
        <img className='h-full w-full object-cover rounded-xl' src={product.images[0]} alt="image" />
      </figure>
      <h3 className='text-lg text-slate-200'>{product.title}{product.id} {product.state}</h3>
      <div className='divider w-full h-px bg-slate-700 my-2'></div>
      <p className='text-xs'>{product.description}</p>
      <div className="details flex flex-row gap-4 justify-between items-center text-slate-200">
        <div className="price flex flex-col w-1/2">
          {/* <span className='text-xs text-slate-500'>Precio</span> */}
          <p className='flex flex-col items-start gap'>
            <span className='font-semibold text-lg'>{product.price}</span>
            <span className='line-through text-xs text-slate-600'>{product.price}</span>
          </p>
        </div>
        {
          product.state === 'default'
            ? <button onClick={(e) => addProduct(e, product)} className="w-1/2 h-8 rounded-lg px-2 bg-lime-400 place-content-center flex flex-row gap-3 items-center justify-between transition-colors hover:bg-lime-200 text-sm font-semibold text-slate-800">
              <span> Add </span>
              <span className='w-6 h-6 grid place-content-center bg-lime-100 rounded-full text-slate-200 text-xl'>
                <PlusIcon className='h-4 w-4 text-slate-800' />
              </span>
            </button>
            : <button onClick={(e) => removeProduct(e, product.id)} className="w-1/2 h-8 rounded-lg px-2 bg-slate-700 place-content-center flex flex-row gap-3 items-center justify-between transition-colors hover:bg-slate-400 hover:text-slate-600 text-sm font-semibold text-slate-400">
              <span> Remove </span>
              <span className='w-6 h-6 grid place-content-center bg-slate-600 rounded-full text-slate-200 text-xl'>
                <MinusIcon className='h-4 w-4 text-slate-800' />
              </span>
            </button>
        }
      </div>
    </article>
  )
}

export default Card