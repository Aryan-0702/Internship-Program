import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [error, setError] = useState("");

  // LOGIN FUNCTION (LOCAL AUTH)
  const login = async (email, password) => {
    // fake user credentials
    const validEmail = "admin@test.com";
    const validPassword = "1234";

    if (email.trim() === validEmail && password.trim() === validPassword) {
      const fakeToken = "demo-token-123456";

      localStorage.setItem("token", fakeToken);
      setToken(fakeToken);
      setError("");
      return true;
    } else {
      setError("Invalid email or password");
      return false;
    }
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  // CHECK AUTH
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        token,
        error,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);