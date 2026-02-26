import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import ManageUsers from "./pages/ManageUsers";
import ManageProducts from "./pages/ManageProducts";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Unauthorized from "./pages/Unauthorized";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import RoleRoute from "./routes/RoleRoute";
import DashboardLayout from "./layout/DashboardLayout";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>

            <Route path="/" element={<Login/>}/>
            <Route path="/unauthorized" element={<Unauthorized/>}/>

            {/* ADMIN */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <RoleRoute role="admin">
                  <DashboardLayout><AdminDashboard/></DashboardLayout>
                </RoleRoute>
              </ProtectedRoute>
            }/>

            <Route path="/manage-users" element={
              <ProtectedRoute>
                <RoleRoute role="admin">
                  <DashboardLayout><ManageUsers/></DashboardLayout>
                </RoleRoute>
              </ProtectedRoute>
            }/>

            <Route path="/manage-products" element={
              <ProtectedRoute>
                <RoleRoute role="admin">
                  <DashboardLayout><ManageProducts/></DashboardLayout>
                </RoleRoute>
              </ProtectedRoute>
            }/>

            {/* USER */}
            <Route path="/user" element={
              <ProtectedRoute>
                <RoleRoute role="user">
                  <DashboardLayout><UserDashboard/></DashboardLayout>
                </RoleRoute>
              </ProtectedRoute>
            }/>

            <Route path="/profile" element={
              <ProtectedRoute>
                <RoleRoute role="user">
                  <DashboardLayout><Profile/></DashboardLayout>
                </RoleRoute>
              </ProtectedRoute>
            }/>

            <Route path="/orders" element={
              <ProtectedRoute>
                <RoleRoute role="user">
                  <DashboardLayout><Orders/></DashboardLayout>
                </RoleRoute>
              </ProtectedRoute>
            }/>

          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </AuthProvider>
  );
}