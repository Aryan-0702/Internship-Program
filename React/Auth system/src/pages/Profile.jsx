import { useAuth } from "../auth/AuthContext";

export default function Profile(){
  const { logout } = useAuth();

  return (
    <div className="page">
      <h1>User Profile</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}