import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import StockDetails from "./pages/StockDetails";
import Watchlist from "./pages/Watchlist";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./auth/AuthContext";
import { WatchlistProvider } from "./store/WatchlistStore";

export default function App() {
    return (
        <AuthProvider>
            <WatchlistProvider>
                <BrowserRouter>
                    <Routes>

                        <Route path="/login" element={<Login />} />

                        <Route path="/" element={
                            <ProtectedRoute><Dashboard /></ProtectedRoute>
                        } />

                        <Route path="/stock/:symbol" element={
                            <ProtectedRoute><StockDetails /></ProtectedRoute>
                        } />

                        <Route path="/watchlist" element={
                            <ProtectedRoute><Watchlist /></ProtectedRoute>
                        } />

                    </Routes>
                </BrowserRouter>
            </WatchlistProvider>
        </AuthProvider>
    );
}