import Card from './Card'

type Props = {
    products: Product[]
}

function CardList({ products }: Props) {
    return (
        <section className='grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
            {
                products?.map(product=>(
                    <Card product={product} key={product.id}/>
                ))
            }
        </section>
    )
}

export default CardList