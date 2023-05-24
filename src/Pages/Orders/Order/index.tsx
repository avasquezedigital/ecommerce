import { useContext } from 'react';
import ShoppingCartContext from "../../../context/Context";
import { MinusIcon } from '@heroicons/react/24/outline'
import Layout from "../../../layout/Layout";

function Order() {
  const { order } = useContext(ShoppingCartContext);
  console.log('====================================');
  console.log(order);
  console.log('====================================');
  return (
    <Layout title="My order" description='Aliqua sit qui dolore fugiat sunt eu ipsum. Fugiat veniam duis ullamco cupidatat irure ea amet. Adipisicing qui proident velit consectetur. Aute irure minim qui occaecat quis laborum.' >
      <section className='my-10 text-slate-400 mx-auto w-3/5'>
        {
          order.products.length > 0
            ? (
              <>
                {
                  order.products.map((product: Product) => (
                    <li key={product.id} className='relative flex flex-row gap-4 items-center  my-3 py-12 px-1 border-b border-slate-300/10 rounded-lg'>
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
                <div className='flex flex-row justify-between w-full px-8'>
                  <h6>Total ({order.totalProducts}productos):</h6>
                  <span>${order.totalPrice}</span>
                </div>
              </>
            )

            : <p className='text-slate-400'> No hay productos añadidos</p>
        }
      </section>
    </Layout>
  )
}

export default Order