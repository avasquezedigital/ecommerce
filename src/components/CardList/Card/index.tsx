import React from 'react'

type Props = {
  product: Product
}

function Card({ product: { id, category: { name }, images, title, description, price } }: Props): React.JSX.Element {
  return (
    <article
      id={String(id)}
      className='card relative flex flex-col rounded-xl gap-3 bg-slate-800 border-2 border-slate-50/0 p-8 text-slate-400 cursor-pointer drop-shadow-lg'>
      <figure className='relative h-30'>
        <span className='category absolute top-2 left-2 z-10 bg-slate-100 py-1 px-2 text-xs rounded-md drop-shadow-sm'> {name} </span>
        <span className='absolute top-2 right-2 w-8 h-8 z-10 grid place-content-center bg-slate-800 py-1 px-2 text-xs rounded-full drop-shadow-sm'>c</span>
        <img className='h-full w-full object-cover rounded-xl' src='https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="image" />
      </figure>
      <h3 className='text-lg text-slate-200'>{title}{id}</h3>
      <div className='divider w-full h-px bg-slate-700 my-2'></div>
      <p className='text-xs'>{description}</p>
      <div className="details flex flex-row gap-4 justify-between items-center text-slate-200">
        <div className="price flex flex-col w-1/2">
          {/* <span className='text-xs text-slate-500'>Precio</span> */}
          <p className='flex flex-col items-start gap'>
            <span className='font-semibold text-lg'>{price}</span>
            <span className='line-through text-xs text-slate-600'>{price}</span>
          </p>
        </div>
        <button className="w-1/2 h-8 rounded-lg bg-lime-400 place-content-center flex flex-row gap-3 items-center transition-colors hover:bg-lime-200 text-sm font-semibold text-slate-800">
          Add <span className='w-6 h-6 grid place-content-center bg-lime-100 rounded-full text-slate-200 text-xl'></span>
        </button>
      </div>
    </article>
  )
}

export default Card