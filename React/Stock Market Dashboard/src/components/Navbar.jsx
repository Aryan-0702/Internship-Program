import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { user, logout } = useAuth();
    const [toast, setToast] = useState(null);

    useEffect(() => {

        const handler = (e) => {
            setToast(e.detail);
            setTimeout(() => setToast(null), 2000);
        };

        window.addEventListener("watchlist:add", handler);
        return () => window.removeEventListener("watchlist:add", handler);

    }, []);

    return (
        <div className="nav">

            <div className="logo">StockVision</div>

            <div className="nav-links">
                <Link to="/">Dashboard</Link>
                <Link to="/watchlist">Watchlist</Link>

                <div className="user-pill">
                    {user?.email}
                </div>

                <button className="btn" onClick={logout}>
                    Logout
                </button>
            </div>

            {toast && <div className="nav-toast">{toast}</div>}

        </div>
    );
}