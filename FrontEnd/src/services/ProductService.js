import axios from 'axios';

const API_URL = 'http://localhost:8080/producto';

export async function createProduct(product) {
    return await axios.post(API_URL, product);
}

export async function getProducts() {
    return await axios.get(API_URL);
}

export async function getProductById(productId) {
    return await axios.get(`${ API_URL }/${ productId }`);
}

export async function getProductByName(productName) {
    return await axios.get(`${ API_URL }/${ productName }`);
}

export async function getProductByCategory(productCategory) {
    return await axios.get(`${ API_URL }/, ${ productCategory }`);
}

export async function updateProduct(productId, productMod) {
    return await axios.post(`${ API_URL }/update/${ productId }`, productMod);
}
export async function deleteProduct(productId) {
    return await axios.delete(`${ API_URL }/delete/${ productId }`);
}