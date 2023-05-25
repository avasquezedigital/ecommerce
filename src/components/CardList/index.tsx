import { useContext, useEffect, useState } from 'react';
import ShoppingCartContext from '../../context/Context';
import Card from './Card/Card'

type Props = {
    location: string
}

function CardList({ location }: Props) {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const { setProducts, products, defaultProducts, resetProducts, orders } = useContext(ShoppingCartContext);

    const filterCategoryProducts = (): Product[] => {
        const newProducts = [...defaultProducts];
        const productsByCategory = newProducts.filter(product => {
            return product.category.name.toLowerCase() === location.toLowerCase();
        });
        if (location.toLowerCase() === '/' || location.toLowerCase() === 'all') {
            return products;
        } else {
            return productsByCategory;
        }
    }

    const filterByTitle = (location: string) => {
        const filteredProducts = [...products].filter(product => {
            return product.title.toLowerCase().includes(searchTerm.toLowerCase())
        })
        const filteredProductsCategory = [...filteredProducts].filter(product => {
            return product.title.toLowerCase().includes(searchTerm.toLowerCase()) && product.category.name.toLowerCase() === location.toLowerCase();
        })
        if (searchTerm.length < 3) {
            if (location.toLowerCase() === '/' || location.toLowerCase() === 'all') {
                setProducts(defaultProducts)
            } else {
                setProducts(filterCategoryProducts())
            }
        } else {
            if (location.toLowerCase() === '/' || location.toLowerCase() === 'all') {
                setProducts(filteredProducts)
            } else {
                setProducts(filteredProductsCategory)
            }
        }
    }

    useEffect(() => {
        filterByTitle(location);
        return () => { }
    }, [searchTerm])

    const dataCards = () => {
        if (location.toLowerCase() === '/' || location.toLowerCase() === 'all') {
            setProducts(defaultProducts)
        } else {
            setProducts(filterCategoryProducts())
        }

    }

    useEffect(() => {
        dataCards();
    }, [location])

    useEffect(() => {
        dataCards();
    }, [])

    return (
        <>
            <div className='flex gap-4 justify-center items-center w-full mx-auto pt-8'>
                <label htmlFor="" className='text-slate-400 text-xl'> Search {location === 'all' || location === '/' ? null : ' by category'}: </label>
                <input
                    type="text"
                    onChange={e => setSearchTerm(e.target.value)}
                    className='bg-slate-800 py-2 px-4 text-slate-400 rounded-lg'
                />
            </div>
            <section className='grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
                {
                    !products.length
                        ?
                        <p className="text-sm font-light text-slate text-slate-500">No se encontraron productos con el titulo: {searchTerm}</p>
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