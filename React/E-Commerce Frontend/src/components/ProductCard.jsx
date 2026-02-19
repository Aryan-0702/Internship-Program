import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, cart } = useCart();

  const item = cart.find(i => i.id === product.id);

  return (
    <div className="card">
      <img src={product.image} />
      <h3>{product.title.slice(0,40)}</h3>
      <p>${product.price}</p>

      {item && <span>Qty: {item.qty}</span>}

      <div className="cardBtns">
        <Link to={`/product/${product.id}`}>View</Link>
        <button onClick={() => addToCart(product)}>
          Add
        </button>
      </div>
    </div>
  );
}