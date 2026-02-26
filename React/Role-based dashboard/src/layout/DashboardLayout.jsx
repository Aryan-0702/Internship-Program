import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Sidebar/>
      <Header/>
      <div className="main">{children}</div>
    </>
  );
}