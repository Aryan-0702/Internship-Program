import { useWatchlist } from "../store/WatchlistStore";
import Layout from "../layout/Layout";

export default function Watchlist() {
  const { list, remove } = useWatchlist();

  return (
    <Layout>
      <h1>Your Watchlist</h1>

      {list.length === 0 && <p>No stocks yet. Add from details page!</p>}

      <div className="grid">
        {list.map(s => (
          <div className="card watchlist-card" key={s.symbol}>

            <div className="watch-left">
              <h3>{s.symbol}</h3>
              <p>${s.price}</p>
            </div>

            <button
              className="remove-btn"
              onClick={() => remove(s.symbol)}
              title="Remove from Watchlist"
            >
              ✕
            </button>

          </div>
        ))}
      </div>
    </Layout>
  );
}