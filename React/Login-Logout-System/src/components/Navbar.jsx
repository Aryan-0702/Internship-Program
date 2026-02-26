import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  return (
    <nav className="nav">
      <h2>AuthApp</h2>
      {user && (
        <div>
          <Link to="/dashboard">Dashboard</Link>
          <button
            onClick={() => {
              logout();
              nav("/login");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}