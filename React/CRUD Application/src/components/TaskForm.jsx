import { useState, useRef, useEffect } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

export default function TaskForm({ addTask }){

  const [text,setText] = useState("");
  const noteRef = useRef(); // uncontrolled input

  /* lifecycle: mount */
  useEffect(()=>{
    noteRef.current.focus();
  },[]);

  const handleSubmit = e =>{
    e.preventDefault();
    if(!text.trim()) return;

    addTask(text,noteRef.current.value);

    setText("");
    noteRef.current.value="";
  };

  return(
    <form onSubmit={handleSubmit}>

      {/* controlled */}
      <Input
        value={text}
        onChange={e=>setText(e.target.value)}
        placeholder="Task title"
      />

      {/* uncontrolled */}
      <Input
        ref={noteRef}
        placeholder="Optional note"
      />

      <Button className="add">Add Task</Button>

    </form>
  );
}