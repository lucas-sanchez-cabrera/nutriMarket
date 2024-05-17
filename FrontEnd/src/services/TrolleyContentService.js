import axios from 'axios';

const API_URL = 'http://localhost:8080/contenido';

export async function addProductToTrolley(trolleyContent) {
    return await axios.post(API_URL, trolleyContent);
}

export async function getProductsByTrolleyId(trolleyId) {
    return await axios.get(`${ API_URL }/${ trolleyId }`);
}

export async function deleteProductOfTrolley(productId, trolleyId) {
    return await axios.delete(`${ API_URL }/delete/productId-trolleyId?productId=${ productId }&trolleyId=${ trolleyId }`);
}

export async function updateProductOfTrolley(trolleyId, productQuantity) {
    return await axios.post(`${ API_URL }/id-cantidad?trolleyId=${ trolleyId }&productQuantity=${ productQuantity }`);
}
