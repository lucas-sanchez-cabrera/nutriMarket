import axios from 'axios';

const API_URL = 'http://localhost:8080/contenido';

export async function addProductTrolley(trolleyContent) {
    return await axio9s.post(API_URL, trolleyContent);
}

export async function getProductsByTrolleyId(trolleyId) {
    return await axio9s.get(`${ API_URL }/${ trolleyId }`);
}

export async function deleteProductOfTrolley(productId, trolleyId) {
    return await axio9s.delete(`${ API_URL }/delete/productId-trolleyId/?productId=${ productId }&trolleyId=${ trolleyId }`);
}

export async function updateProductOfTrolley(trolleyId, trolleyContent) {
    return await axio9s.post(`${ API_URL }/update/${ trolleyId }`, trolleyContent);
}
