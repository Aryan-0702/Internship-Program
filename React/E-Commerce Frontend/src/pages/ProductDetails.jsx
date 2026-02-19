import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { api } from "../services/api";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useCart } from "../context/CartContext";

export default function ProductDetails(){
  const {id}=useParams();
  const [product,setProduct]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  const { cart, addToCart, increaseQty, decreaseQty } = useCart();

  useEffect(()=>{
    api.get(`/products/${id}`)
    .then(res=>setProduct(res.data))
    .catch(()=>setError("Not found"))
    .finally(()=>setLoading(false));
  },[id]);

  if(loading) return <Loader/>
  if(error) return <Error msg={error}/>

  const item = cart.find(i => i.id === product.id);

  return(
    <div className="details">
      <img src={product.image}/>
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>

        {!item ? (
          <button onClick={()=>addToCart(product)}>
            Add To Cart
          </button>
        ) : (
          <div style={{marginTop:"20px"}}>
            <button onClick={()=>decreaseQty(product.id)}>-</button>
            <span style={{margin:"0 15px", fontSize:"20px"}}>
              {item.qty}
            </span>
            <button onClick={()=>increaseQty(product.id)}>+</button>
          </div>
        )}
      </div>
    </div>
  )
}