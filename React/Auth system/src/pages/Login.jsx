import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const {login,error} = useAuth();
  const nav = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async e =>{
    e.preventDefault();
    const success = await login(email,password);
    if(success) nav("/dashboard");
  };

  return(
    <div className="center">
      <form className="card" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />

        <button>Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}