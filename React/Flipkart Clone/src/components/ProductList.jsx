import ProductCard from "./ProductCard";

import iphone from "../assets/Product/iphone.webp";
import speaker from "../assets/Product/Bluetooth Speaker.jpg";
import watch from "../assets/Product/Smart Watch.jpg";
import sony from "../assets/Product/Sony.webp";
import macbook from "../assets/Product/MacBook.jpg";
import samsung from "../assets/Product/samsung.jpg";

const ProductList = () => {
  const products = [
    { id: 1, name: "iPhone 14", price: 69999, image: iphone },
    { id: 2, name: "Bluetooth Speaker", price: 2999, image: speaker },
    { id: 3, name: "Smart Watch", price: 4999, image: watch },
    { id: 4, name: "Sony Headphones", price: 8999, image: sony },
    { id: 5, name: "MacBook Air", price: 99999, image: macbook },
    { id: 6, name: "Samsung TV", price: 45999, image: samsung },
  ];

  return (
    <section className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;