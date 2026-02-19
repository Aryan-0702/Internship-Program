import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {

  const [tasks, setTasks] = useState([]);

  /* lifecycle: load initial data */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  /* lifecycle: update */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, note) => {
    setTasks([
      ...tasks,
      { id: Date.now(), title, note, done: false }
    ]);
  };

  const toggleTask = id => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="container">

      <h2 className="title">⚡ Task Manager</h2>

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />

    </div>
  );
}