import ProductCard from "./ProductCard";

const ProductList = ({ products, loading, error }) => {
  if (loading) return <h2 className="status">Loading products...</h2>;
  if (error) return <h2 className="status error">{error}</h2>;
  if (products.length === 0) return <h2 className="status">No products</h2>;

  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p}/>
      ))}
    </div>
  );
};

export default ProductList;