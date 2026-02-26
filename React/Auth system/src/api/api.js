import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  headers:{
    "x-api-key":"reqres-free-v1",
    "Content-Type":"application/json"
  }
});

export default API;