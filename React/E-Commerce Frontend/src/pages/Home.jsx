import { useEffect, useState } from "react";
import { api } from "../services/api";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Home(){
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  useEffect(()=>{
    api.get("/products")
    .then(res=>setProducts(res.data))
    .catch(()=>setError("Failed to load"))
    .finally(()=>setLoading(false));
  },[]);

  if(loading) return <Loader/>
  if(error) return <Error msg={error}/>

  return(
    <div className="grid">
      {products.map(p=>(
        <ProductCard key={p.id} product={p}/>
      ))}
    </div>
  )
}