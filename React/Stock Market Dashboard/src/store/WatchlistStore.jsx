import { createContext, useContext, useState } from "react";
const C = createContext();

export const WatchlistProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const add = (stock) => {
    if (!list.find(s => s.symbol === stock.symbol))
      setList([...list, stock]);
    else alert("Already in watchlist!");
  };

  const remove = (symbol) => {
    setList(list.filter(s => s.symbol !== symbol));
  };

  return (
    <C.Provider value={{ list, add, remove }}>
      {children}
    </C.Provider>
  );
};

export const useWatchlist = () => useContext(C);