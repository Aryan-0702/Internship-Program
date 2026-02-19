import { useState } from "react";
import UserCard from "./components/UserCard";

export default function App() {

  const [users,setUsers] = useState([
    {id:1,name:"Aryan",email:"aryan@mail.com",active:true},
    {id:2,name:"Rahul",email:"rahul@mail.com",active:false},
    {id:3,name:"Neha",email:"neha@mail.com",active:true}
  ]);

  /* toggle status */
  const toggleStatus = (id)=>{
    setUsers(users.map(u =>
      u.id===id ? {...u,active:!u.active} : u
    ));
  };

  /* remove user */
  const removeUser = (id)=>{
    setUsers(users.filter(u=>u.id!==id));
  };

  return (
    <div className="container">

      <h2 className="title">User List</h2>

      {/* Conditional Rendering */}
      {users.length===0 ? (
        <p className="empty">No users available</p>
      ) : (
        users.map(user=>(
          <UserCard
            key={user.id}
            user={user}
            toggleStatus={toggleStatus}
            removeUser={removeUser}
          />
        ))
      )}

    </div>
  );
}