export const stocks = [
    { symbol: "AAPL", price: 192, change: 1.2 },
    { symbol: "TSLA", price: 251, change: -0.8 },
    { symbol: "AMZN", price: 144, change: 0.4 },
    { symbol: "MSFT", price: 378, change: 1.8 },
    { symbol: "GOOG", price: 138, change: -0.5 }
];

export const getStocks = () => {
    return new Promise(res => setTimeout(() => res(stocks), 600));
};