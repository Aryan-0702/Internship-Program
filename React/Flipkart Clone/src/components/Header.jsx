import { useState } from "react";

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="header">
      <h1 className="logo">Flipkart</h1>

      <input
        type="text"
        placeholder="Search for products, brands and more"
        value={search}
        onChange={handleChange}
        className="search"
      />

      <nav className="nav">
        <a href="#">Login</a>
        <a href="#">Cart</a>
      </nav>
    </header>
  );
};

export default Header;