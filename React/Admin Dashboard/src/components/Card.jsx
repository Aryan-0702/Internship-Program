import { memo } from "react";
import React from "react";


function Card({title,value}){
  return(
    <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}

export default memo(Card);