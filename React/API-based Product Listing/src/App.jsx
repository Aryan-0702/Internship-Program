import { useEffect, useState } from "react";
import { fetchProducts } from "./services/productService";
import ProductList from "./components/ProductList";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="container">
      <h1 className="title">🛍 Product Store</h1>
      <ProductList products={products} loading={loading} error={error}/>
    </div>
  );
}