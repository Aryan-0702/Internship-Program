import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
    const nav = useNavigate();
    const { login } = useAuth();

    const [email, setE] = useState("");
    const [pass, setP] = useState("");

    const submit = () => {
        if (login(email, pass)) nav("/");
        else alert("Invalid credentials");
    };

    return (
        <div className="login-wrapper">

            {/* LEFT PANEL */}
            <div className="login-left">
                <div className="login-title">StockVision</div>
                <p style={{ maxWidth: 400, lineHeight: 1.6 }}>
                    Professional stock analytics dashboard designed for traders,
                    investors, and analysts. Monitor markets, track assets,
                    and manage watchlists in real-time.
                </p>
            </div>

            {/* RIGHT PANEL */}
            <div className="login-right">
                <div className="card login-card">
                    <h2>Login</h2>

                    <input
                        placeholder="Email"
                        onChange={e => setE(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        onChange={e => setP(e.target.value)}
                    />

                    <button className="btn" style={{ width: "100%", marginTop: 20 }} onClick={submit}>
                        Sign In
                    </button>

                    <p style={{ opacity: .6, fontSize: 14, marginTop: 15 }}>
                        Demo: admin@test.com / 1234
                    </p>
                </div>
            </div>

        </div>
    );
}