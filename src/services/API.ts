export const API_URL = 'https://api.escuelajs.co/api/v1';

type Params = {
    url: string,
    offset: number,
    limit: number
}

export const fetchAPI = async ({ url, offset, limit }: Params) => fetch(`${url}?offset=${offset}&limit=${limit}`);


//Products
export const getProducts = async (path: string = 'products') => {
    try {
        const params = {
            url: `${API_URL}/${path}`,
            offset: 0,
            limit: 10
        }
        const response = await fetchAPI(params);
        const dataProducts = await response.json();
        const sortProducts = dataProducts.sort((a: Product, b: Product) => a.id - b.id);
        const copyData = [...sortProducts];
        const dataBeauty = copyData.map((p: Product) => {
            let newProduct: Product = {
                id: p.id,
                title: 'Macbook Pro 13',
                description: 'Non est consequat cupidatat esse. Id incididunt ea ullamco aliqua mollit velit qui id consequat ea. Excepteur et incididunt nostrud excepteur.',
                images: ['https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
                price: 231000,
                category: p.category,
                state: 'default'
            }
            return newProduct;
        })
        return dataBeauty
    } catch (error) {
        console.log(error);
        return [
            {
                id: 0,
                title: 'Macbook Pro 13',
                description: 'Non est consequat cupidatat esse. Id incididunt ea ullamco aliqua mollit velit qui id consequat ea. Excepteur et incididunt nostrud excepteur.',
                images: ['https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
                price: 231000,
                category: {
                    id: 0,
                    name: 'categoria',
                    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                },
                state: 'default'
            }
        ]
    }
}