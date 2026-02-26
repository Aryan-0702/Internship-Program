import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <div className="header">
      <div style={{flex:1}}>Welcome {user?.name}</div>
      <button className="btn" onClick={logout}>Logout</button>
    </div>
  );
}