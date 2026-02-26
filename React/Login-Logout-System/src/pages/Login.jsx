import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const success = login(form.username, form.password);
    if (success) nav("/dashboard");
    else setError("Invalid credentials");
  };

  return (
    <div className="center">
      <form className="card" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          placeholder="Username"
          onChange={e => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />

        {error && <p className="error">{error}</p>}

        <button>Login</button>
      </form>
    </div>
  );
}