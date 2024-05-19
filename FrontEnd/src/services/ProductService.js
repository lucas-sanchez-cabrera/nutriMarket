import axios from 'axios';

const API_URL = 'http://localhost:8080/producto';

async function createProduct(product) {
    return await axios.post(API_URL, product);
}

async function getProducts() {
    return await axios.get(API_URL);
}

async function getProductById(productId) {
    return await axios.get(`${ API_URL }/${ productId }`);
}

async function getProductByName(productName) {
    return await axios.get(`${ API_URL }/${ productName }`);
}
async function getProductByCategory(productCategory) {
    return await axios.get(`${ API_URL }/, ${ productCategory }`);
}

async function updateProduct(productId, productMod) {
    return await axios.post(`${ API_URL }/update/${ productId }`, productMod);
}

async function deleteProduct(productId) {
    return await axios.delete(`${ API_URL }/delete/${ productId }`);
}

export default {createProduct, getProducts, getProductByCategory, getProductById, getProductByName, deleteProduct, updateProduct };