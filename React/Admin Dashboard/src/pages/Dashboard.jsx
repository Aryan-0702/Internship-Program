import Card from "../components/Card";
import React from "react";

export default function Dashboard(){
  return(
    <div className="grid md:grid-cols-3 gap-6">
      <Card title="Users" value="1,230"/>
      <Card title="Revenue" value="$12,400"/>
      <Card title="Orders" value="320"/>
    </div>
  )
}