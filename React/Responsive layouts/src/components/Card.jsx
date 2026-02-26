import React, { memo } from "react";

function Card({title,desc}){
  return(
    <div className="
      bg-white
      p-7
      rounded-2xl
      shadow-md
      hover:shadow-xl
      transition-all
      duration-300
      border border-slate-100
      hover:-translate-y-2
    ">

      <h3 className="text-xl font-semibold mb-3 text-slate-800">
        {title}
      </h3>

      <p className="text-slate-500">
        {desc}
      </p>

    </div>
  )
}

export default memo(Card);