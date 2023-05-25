type Props = {
    order: Order
}

function OrderCard({ order }: Props) {
    return (
        <div className='my-10 text-slate-400 mx-auto w-3/5 bg-slate-800 p-10 rounded-2xl'>
            {
                order.products.length > 0
                    ? (
                        <>
                             <h3 className="text-xl font-semibold"><span className="text-slate-200">Order ID:</span> {order.id}</h3>
                            {
                                order.products.map((product: Product) => (
                                    <li key={product.id} className='relative flex flex-row gap-4 items-center  my-3 py-6 px-1 border-b border-slate-300/10 rounded-lg'>
                                        <figure className='w-1/2'>
                                            <img src={product.images[0]} alt="" className='w-40 h-20 object-cover rounded-md m-0' />
                                        </figure>
                                        <div className='flex flex-col items-start justify-between w-1/2'>
                                            <h6 className='text-xl pb-2 text-slate-200 font-semibold'> {product.title}</h6>
                                            <span className=' text-lg'> ${product.price}</span>
                                        </div>
                                    </li>
                                ))
                            }
                            <div className='flex flex-row gap-6 justify-between w-full px-8 py-8'>
                                <h6>Total ({order.totalProducts} productos):</h6>
                                <span>${order.totalPrice}</span>
                            </div>
                        </>
                    )

                    : <p className='text-slate-400'> No hay productos añadidos</p>
            }
        </div>
    )
}

export default OrderCard