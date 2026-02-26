import React from "react";
import Card from "../components/Card";

export default function CardGrid(){

  const items=[
    {title:"Fast",desc:"Optimized rendering"},
    {title:"Responsive",desc:"Mobile first design"},
    {title:"Modern",desc:"Clean UI components"},
    {title:"Reusable",desc:"Component system"},
    {title:"Scalable",desc:"Production ready"},
    {title:"Performant",desc:"Minimal re-renders"}
  ];

  return(
    <section className="py-24 px-6 bg-slate-50">

      <h2 className="text-3xl font-bold text-center mb-14">
        Features
      </h2>

      <div className="
        max-w-7xl mx-auto
        grid gap-8
        sm:grid-cols-2
        lg:grid-cols-3
      ">
        {items.map((item,i)=>(
          <Card key={i} {...item}/>
        ))}
      </div>

    </section>
  )
}