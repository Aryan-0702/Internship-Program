import React, { useState, useCallback } from "react";
import Table from "../components/Table";
import UserForm from "../forms/UserForm";

export default function Users(){

  const [users,setUsers] = useState([
    {id:1,name:"John",email:"john@mail.com"},
    {id:2,name:"Sara",email:"sara@mail.com"}
  ]);

  const [open,setOpen] = useState(false);

  const toggleForm = useCallback(()=>{
    setOpen(v=>!v);
  },[]);

  const addUser = useCallback((newUser)=>{
    setUsers(prev=>[
      ...prev,
      { id: Date.now(), ...newUser }
    ]);
  },[]);

  return(
    <div className="space-y-6">

      <button
        onClick={toggleForm}
        className="bg-blue-600 text-white px-4 py-2 rounded">
        {open?"Close":"Add User"}
      </button>

      {open && <UserForm onAdd={addUser}/>}

      <Table data={users}/>
    </div>
  )
}