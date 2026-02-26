import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="dash-layout">
      <Sidebar />

      <div className="dash-main">
        <Header />
        <div className="dash-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}