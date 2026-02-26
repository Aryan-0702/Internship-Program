import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import ChartBox from "../components/ChartBox";
import { useWatchlist } from "../store/WatchlistStore";
import Toast from "../components/Toast";
import { useState } from "react";

export default function StockDetails() {

    const { symbol } = useParams();
    const { add, list } = useWatchlist();

    const [toast, setToast] = useState(null);

    const stock = {
        price: 200,
        change: 1.45
    };

    const info = {
        pe: 28.4,
        eps: 5.3,
        cap: "520B",
        volume: "18M",
        high: "230",
        low: "180"
    };

    const addStock = () => {

        const exists = list.some(item => item.symbol === symbol);

        if (exists) {
            setToast("Already in Watchlist ⚠️");
            return;
        }

        add({ symbol, price: stock.price });
        setToast("Added to Watchlist ✓");
    };

    return (
        <Layout>

            {/* HEADER */}
            <div className="stock-header">

                <div>
                    <h1>{symbol}</h1>

                    <div className="stock-price">
                        ${stock.price}
                        <span className={stock.change > 0 ? "up" : "down"}>
                            {stock.change > 0 ? "+" : ""}{stock.change}%
                        </span>
                    </div>
                </div>

                <button className="btn" onClick={addStock}>
                    Add to Watchlist
                </button>

            </div>

            {/* GRID */}
            <div className="stock-grid">

                {/* CHART */}
                <div className="card chart-card">
                    <h2>Price Performance</h2>
                    <ChartBox />
                </div>

                {/* RIGHT PANEL */}
                <div className="side-panel">

                    <div className="card stats-card">
                        <h3>Key Statistics</h3>

                        <div className="stats-grid">
                            <div><span>P/E</span><b>{info.pe}</b></div>
                            <div><span>EPS</span><b>{info.eps}</b></div>
                            <div><span>Market Cap</span><b>{info.cap}</b></div>
                            <div><span>Volume</span><b>{info.volume}</b></div>
                            <div><span>52W High</span><b>{info.high}</b></div>
                            <div><span>52W Low</span><b>{info.low}</b></div>
                        </div>

                    </div>

                    <div className="card">
                        <h3>Company Summary</h3>
                        <p>
                            This is a demo stock preview interface showing realistic financial layout.
                            You can integrate real APIs later for live data.
                        </p>
                    </div>

                </div>
            </div>

            {/* TOAST */}
            {toast && <Toast msg={toast} setShow={setToast} />}

        </Layout>
    );
}