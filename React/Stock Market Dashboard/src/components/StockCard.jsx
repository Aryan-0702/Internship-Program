import { Link } from "react-router-dom";
import { useWatchlist } from "../store/WatchlistStore";

export default function StockCard({ stock }) {

    const { add, list } = useWatchlist();

    const handleAdd = () => {

        const exists = list.some(item => item.symbol === stock.symbol);

        /* SEND GLOBAL EVENT */
        window.dispatchEvent(
            new CustomEvent("watchlist:add", {
                detail: exists
                    ? `${stock.symbol} already in Watchlist ⚠️`
                    : `${stock.symbol} added to Watchlist ✓`
            })
        );

        if (exists) return;

        add(stock);
    };

    return (
        <div className="card">

            <h2>{stock.symbol}</h2>

            <h1 style={{ margin: "10px 0" }}>
                ${stock.price}
            </h1>

            <div className={stock.change > 0 ? "price-up" : "price-down"}>
                {stock.change > 0 ? "+" : ""}{stock.change}%
            </div>

            <button className="btn" style={{ marginTop: 15 }} onClick={handleAdd}>
                Add to Watchlist
            </button>

            <Link
                to={`/stock/${stock.symbol}`}
                style={{ display: "block", marginTop: 15, opacity: .8 }}
            >
                View Details →
            </Link>

        </div>
    );
}