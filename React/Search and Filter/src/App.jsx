import { useEffect, useState } from "react";
import { fetchProducts } from "./services/productService";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";

export default function App() {
  const [products,setProducts]=useState([]);
  const [filtered,setFiltered]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState("");

  const [search,setSearch]=useState("");
  const [category,setCategory]=useState("");

  useEffect(()=>{
    const load=async()=>{
      try{
        const data=await fetchProducts();
        setProducts(data);
        setFiltered(data);
      }catch(err){
        setError(err);
      }finally{
        setLoading(false);
      }
    };
    load();
  },[]);

  useEffect(()=>{
    let temp=products;

    if(search)
      temp=temp.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );

    if(category)
      temp=temp.filter(p => p.category===category);

    setFiltered(temp);
  },[search,category,products]);

  const categories=[...new Set(products.map(p=>p.category))];

  return (
    <div className="container">
      <h1 className="title">🛍 Product Store</h1>

      <div className="controls">
        <SearchBar search={search} setSearch={setSearch}/>
        <FilterBar
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
      </div>

      <ProductList
        products={filtered}
        loading={loading}
        error={error}
      />
    </div>
  );
}