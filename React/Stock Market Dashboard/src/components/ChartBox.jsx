import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function ChartBox() {
    const data = [
        { day: "Mon", price: 1100 },
        { day: "Tue", price: 2000 },
        { day: "Wed", price: 600 },
        { day: "Thu", price: 2500 },
        { day: "Fri", price: 1000 },
    ];

    return (
        <div className="card" style={{ height: 300 }}>
            <ResponsiveContainer>
                <LineChart data={data}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line dataKey="price" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}