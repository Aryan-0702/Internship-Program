export default function UserCard({ user, toggleStatus, removeUser }) {
  return (
    <div className={`user ${user.active ? "active" : ""}`}>

      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>

      <div>
        <button
          className="toggle"
          onClick={() => toggleStatus(user.id)}
        >
          {user.active ? "Deactivate" : "Activate"}
        </button>

        <button
          className="remove"
          onClick={() => removeUser(user.id)}
        >
          Remove
        </button>
      </div>

    </div>
  );
}