import axios from "axios";

const API_URL = "http://localhost:8080/pago";

export async function makePayment(paymentRequest) {
  return await axios.post(API_URL, paymentRequest);
}