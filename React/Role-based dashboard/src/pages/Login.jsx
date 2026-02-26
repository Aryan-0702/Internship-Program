import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();

  const handleLogin = (role) => {
    login(role);
    nav(role === "admin" ? "/admin" : "/user");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Select Role</h2>
        <button className="btn" onClick={()=>handleLogin("admin")}>Login as Admin</button>
        <br/><br/>
        <button className="btn" onClick={()=>handleLogin("user")}>Login as User</button>
      </div>
    </div>
  );
}