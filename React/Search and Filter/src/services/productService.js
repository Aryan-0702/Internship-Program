import axios from "axios";

const API = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
  try {
    const res = await axios.get(API);
    return res.data;
  } catch {
    throw "Failed to fetch products";
  }
};