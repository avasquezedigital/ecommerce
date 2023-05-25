import { useContext, useEffect, useState } from 'react';
import ShoppingCartContext from '../../context/Context';
import Card from './Card/Card'

function CardList() {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const { setProducts, products, defaultProducts } = useContext(ShoppingCartContext);

    const filterByTitle = () => {
        const filteredProducts = [...products].filter(product => {
            return product.title.includes(searchTerm)
        })
        if (searchTerm.length < 3) {
            setProducts(defaultProducts)
        } else {
            setProducts(filteredProducts)
        }
    }

    useEffect(() => {
        filterByTitle();
    }, [searchTerm])

    return (
        <>
            <div className='flex gap-4 justify-center items-center w-full mx-auto pt-8'>
                <label htmlFor="" className='text-slate-400 text-xl'> Search: </label>
                <input
                    type="text"
                    onChange={e => setSearchTerm(e.target.value)}
                    className='bg-slate-800 py-2 px-4 text-slate-400 rounded-lg'
                />
            </div>
            <section className='grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10'>

                {
                    !products.length
                        ?
                        <p className="text-sm font-light text-slate text-slate-500">No se encontraron productos con el titulo: { searchTerm }</p>
                        :
                        products?.map((product: Product) => (
                            <Card product={product} key={product.id} />
                        ))
                }
            </section>
        </>
    )
}

export default CardList