import { useDashboard } from "../context/DashboardContext";

export default function Users() {
  const { data } = useDashboard();

  return (
    <div>
      <h2>Users</h2>
      {data?.map(u => (
        <div key={u.id} className="list">
          {u.name} — {u.email}
        </div>
      ))}
    </div>
  );
}