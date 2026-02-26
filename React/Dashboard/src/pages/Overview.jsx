import { useEffect } from "react";
import { useDashboard } from "../context/DashboardContext";
import Card from "../components/Card";

export default function Overview() {
  const { data, loading, error, fetchDashboard } = useDashboard();

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="grid">
      <Card title="Users" value={data?.length || 0} />
      <Card title="Revenue" value="$12,340" />
      <Card title="Orders" value="320" />
    </div>
  );
}