const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const error = document.getElementById("error");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${todo.completed ? "completed" : ""}" data-action="toggle" data-index="${index}">
        ${todo.text}
      </span>
      <div>
        <button data-action="edit" data-index="${index}">Edit</button>
        <button data-action="delete" data-index="${index}">Delete</button>
      </div>
    `;

    list.appendChild(li);
  });
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const value = input.value.trim();

  if (!value) {
    error.textContent = "Task cannot be empty!";
    return;
  }

  error.textContent = "";

  todos.push({
    text: value,
    completed: false
  });

  input.value = "";
  saveTodos();
  renderTodos();
});

list.addEventListener("click", e => {
  const action = e.target.dataset.action;
  const index = Number(e.target.dataset.index);

  if (!action) return;

  if (action === "delete") {
    todos.splice(index, 1);
  }

  if (action === "toggle") {
    todos[index].completed = !todos[index].completed;
  }

  if (action === "edit") {
    const newText = prompt("Edit task:", todos[index].text);

    if (newText === null) return;
    if (newText.trim() === "") return;

    todos[index].text = newText.trim();
  }

  saveTodos();
  renderTodos();
});

renderTodos();