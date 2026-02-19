import Button from "./ui/Button";

export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className={`task ${task.done ? "done":""}`}>

      <div>
        <b>{task.title}</b>
        <p>{task.note}</p>
      </div>

      <div>
        <Button
          className="toggle"
          onClick={()=>toggleTask(task.id)}
        >
          ✓
        </Button>

        <Button
          className="del"
          onClick={()=>deleteTask(task.id)}
        >
          ✕
        </Button>
      </div>

    </div>
  );
}