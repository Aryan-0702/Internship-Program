import { memo } from "react";
import React from "react";

function Table({data}){
  return(
    <table className="w-full bg-white shadow rounded">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map(u=>(
          <tr key={u.id} className="border-t">
            <td className="p-3">{u.name}</td>
            <td className="p-3">{u.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default memo(Table);