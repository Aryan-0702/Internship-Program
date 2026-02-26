import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Dashboard</h2>

      <nav>
        <Link to="overview">Overview</Link>
        <Link to="products">Products</Link>
        <Link to="users">Users</Link>
      </nav>
    </aside>
  );
}