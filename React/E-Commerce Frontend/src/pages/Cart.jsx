import { useCart } from "../context/CartContext";

export default function Cart(){
  const {cart, increaseQty, decreaseQty, removeFromCart}=useCart();

  const total = cart.reduce((a,c)=>a + c.price*c.qty,0);

  return(
    <div className="cart">
      <h2>Cart</h2>

      {cart.length===0 && <p>No items</p>}

      {cart.map(item=>(
        <div className="cartItem" key={item.id}>
          <img src={item.image}/>
          <h4>{item.title}</h4>

          <div>
            <button onClick={()=>decreaseQty(item.id)}>-</button>
            <span style={{margin:"0 10px"}}>{item.qty}</span>
            <button onClick={()=>increaseQty(item.id)}>+</button>
          </div>

          <p>${(item.price * item.qty).toFixed(2)}</p>

          <button onClick={()=>removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      {cart.length>0 && (
        <h3>Total: ${total.toFixed(2)}</h3>
      )}
    </div>
  )
}