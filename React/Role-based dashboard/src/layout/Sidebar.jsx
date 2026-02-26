import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <div className="sidebar">
      <h2>Dashboard</h2>

      {user.role === "admin" && (
        <>
          <Link to="/admin">Admin Home</Link><br/><br/>
          <Link to="/manage-users">Manage Users</Link><br/><br/>
          <Link to="/manage-products">Products</Link>
        </>
      )}

      {user.role === "user" && (
        <>
          <Link to="/user">User Home</Link><br/><br/>
          <Link to="/profile">Profile</Link><br/><br/>
          <Link to="/orders">Orders</Link>
        </>
      )}
    </div>
  );
}