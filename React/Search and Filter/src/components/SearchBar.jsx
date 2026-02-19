import { useEffect, useRef } from "react";

const SearchBar = ({ search, setSearch }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      className="search"
      placeholder="Search product..."
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;