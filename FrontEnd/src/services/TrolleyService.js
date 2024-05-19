import axios from 'axios';

const API_URL = 'http://localhost:8080/carrito';

export async function createTrolley(trolley) {
    return await axios.post(API_URL, trolley);
}

export async function getTrolleys() {
    return await axios.get(API_URL);
}

export async function getTotalPrice(trolleyId) {
    return await axios.get(`${ API_URL }/total_price/${ trolleyId }`);
}

export async function getTrolleyByUserId(clientId) {
    return await axios.get(`${ API_URL }/${ clientId }`);
}

export async function deleteTrolleyById(trolleyId) {
    return await axios.delete(`${ API_URL }/delete/${ trolleyId }`);
}

export async function updateTrolley(trolleyId, trolleyMod) {
    return await axios.post(`${ API_URL }/update/${ trolleyId }`, trolleyMod);
}
