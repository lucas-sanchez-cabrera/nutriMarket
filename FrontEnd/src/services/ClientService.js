import axios from 'axios';

const API_URL = 'http://localhost:8080/cliente';

export async function createClient(client) {
    return await axios.post(API_URL, client);
}

export async function signupUser(client) {
    return await axios.post(`${ API_URL }/signup`, client);
}

export async function getClients() {
    return await axios.get(API_URL);
}

export async function getClientById(clientId) {
    return await axios.get(`${ API_URL }/${ clientId }`);
}

export async function getClientByRol(clientRol) {
    return await axios.get(`${ API_URL }/rol?rol=${ clientRol }`);
}

export async function loginUser(clientEmail, clientPassword) {
    return await axios.get(`${ API_URL }/login?userEmail=${ clientEmail }&userPassword=${ clientPassword }`);
}

export async function deleteClientByPassword(clientPassword) {
    return await axios.delete(`${ API_URL }/${ clientPassword }`);
}

export async function deleteClientById(clientId) {
    return await axios.delete(`${ API_URL }/${ clientId }`);
}

export async function updateClient(clientId, clientMod) {
    return await axios.post(`${ API_URL }/${ clientId }`, clientMod);
}