import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router-dom";

export default function Dashboard(){
  const { logout } = useAuth();

  return (
    <div className="page">
      <h1>Dashboard</h1>
      <Link to="/profile">Go Profile</Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
}