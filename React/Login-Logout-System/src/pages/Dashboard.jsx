import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <div className="center">
        <div className="card">
          <h1>Welcome {user} 🎉</h1>
          <p>You are authenticated!</p>
        </div>
      </div>
    </>
  );
}