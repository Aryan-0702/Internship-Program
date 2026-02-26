import { useEffect, useState } from "react";
import { getStocks } from "../api/stockApi";
import StockCard from "../components/StockCard";
import ChartBox from "../components/ChartBox";
import Layout from "../layout/Layout";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getStocks().then(setData);
  }, []);

  return (
    <Layout>

      <h2 style={{ marginBottom: 20 }}>Market Overview</h2>

      {/* MAJOR INDICES (Mock Data) */}
      <div className="grid">
        <div className="card">
          <h3>NIFTY 50</h3>
          <h4>18,834 <span className="price-up">+0.43%</span></h4>
        </div>
        <div className="card">
          <h3>SENSEX</h3>
          <h4>61,523 <span className="price-up">+0.27%</span></h4>
        </div>
        <div className="card">
          <h3>NASDAQ</h3>
          <h4>15,120 <span className="price-down">-0.12%</span></h4>
        </div>
      </div>

      {/* MARKET CHART */}
      <h2 style={{ marginTop: 30, marginBottom: 30 }}>Market Trend</h2>
      <ChartBox />

      {/* TOP STOCKS */}
      <h2 style={{ marginTop: 40 }}>Top Stocks</h2>
      <div className="grid">
        {data.map(s => <StockCard key={s.symbol} stock={s} />)}
      </div>

      {/* TOP GAINERS/LOSERS */}
      <h2 style={{ marginTop: 40 }}>Gainers & Losers</h2>
      <div className="grid">
        {data.map(s => (
          <div key={s.symbol} className="card">
            <h3>{s.symbol}</h3>
            <p className={s.change > 0 ? "price-up" : "price-down"}>
              {s.change > 0 ? "+" : ""}{s.change}%
            </p>
          </div>
        ))}
      </div>

    </Layout>
  );
}