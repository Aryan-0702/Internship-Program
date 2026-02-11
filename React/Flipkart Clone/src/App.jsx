import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

const App = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Header onSearch={setSearchText} />
      <Banner />
      <ProductList searchText={searchText} />
      <Footer />
    </>
  );
};

export default App;