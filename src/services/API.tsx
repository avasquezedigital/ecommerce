export const API_URL = 'https://api.escuelajs.co/api/v1/products';

type Params = {
    url: string,
    offset: number,
    limit: number
}

export const fetchAPI = async ({ url, offset, limit }: Params) => fetch(`${url}?offset=${offset}&limit=${limit}`);
