let tasks = JSON.parse(localStorage.getItem("taches")) || [];

function saveTasks() {
  localStorage.setItem("taches", JSON.stringify(tasks));
}

function renderTasks(filter = 'all') {
  const list = document.getElementById("task-list");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    if (filter === 'done' && !task.done) return;
    if (filter === 'todo' && task.done) return;

    const li = document.createElement("li");
    li.className = task.done ? "done" : "";

    li.innerHTML = `
      <span onclick="toggleDone(${index})">${task.text}</span>
      <div class="actions">
        <button onclick="deleteTask(${index})">Supprimer</button>
      </div>
    `;
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("task-input");
  const text = input.value.trim();

  if (text !== "") {
    tasks.push({ text, done: false });
    saveTasks();
    input.value = "";
    renderTasks();
  }
}

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function filterTasks(filter) {
  renderTasks(filter);
}

window.onload = () => {
  renderTasks();
};
