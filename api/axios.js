import axios from "axios";

const API_BASE = "https://66cf675b901aab2484221010.mockapi.io/"

const instance = axios.create({
  baseURL: "https://66cf675b901aab2484221010.mockapi.io/",
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export {API_BASE, instance}