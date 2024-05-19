import axios from "axios";

const API_URL = "http://localhost:8080/help";

export async function help() {
  return await axios.post(API_URL);
}