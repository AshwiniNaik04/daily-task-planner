const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

/* Display Current Date */

const today = new Date();

document.getElementById("date").innerText =
    today.toDateString();


/* Save Tasks to LocalStorage */

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


/* Render Tasks */

function renderTasks() {

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (currentFilter === "pending") {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    if (currentFilter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    }

    if (filteredTasks.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }

    filteredTasks.forEach(task => {

        const taskElement = document.createElement("div");

        taskElement.className = "task";

        taskElement.innerHTML = `
            <span class="task-text ${task.completed ? "completed" : ""}">
                ${escapeHTML(task.title)}
            </span>

            <button
                onclick="toggleTask(${task.id})"
                title="${task.completed ? "Mark as pending" : "Mark as completed"}"
            >
                <i class="fa-solid fa-check"></i>
            </button>

            <button
                onclick="editTask(${task.id})"
                title="Edit task"
            >
                <i class="fa-solid fa-pen"></i>
            </button>

            <button
                onclick="deleteTask(${task.id})"
                title="Delete task"
            >
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

        taskList.appendChild(taskElement);
    });
}


/* Add Task */

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        taskInput.focus();
        return;
    }

    const newTask = {
        id: Date.now(),
        title: taskText,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();
    renderTasks();

    taskInput.value = "";
    taskInput.focus();
}


/* Edit Task */

function editTask(id) {

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return;
    }

    const taskElement = [...taskList.children].find(
        element => element.querySelector(".task-text")?.textContent.trim() === task.title
    );

    if (!taskElement) {
        return;
    }

    taskElement.innerHTML = `
        <input
            type="text"
            class="edit-input"
            value="${escapeHTML(task.title)}"
            id="edit-${task.id}"
        >

        <button
            onclick="saveTask(${task.id})"
            title="Save"
        >
            <i class="fa-solid fa-floppy-disk"></i>
        </button>

        <button
            onclick="cancelEdit()"
            title="Cancel"
        >
            <i class="fa-solid fa-xmark"></i>
        </button>
    `;

    const editInput = document.getElementById(`edit-${task.id}`);

    editInput.focus();

    editInput.select();

    editInput.addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            saveTask(id);
        }

    });
}


/* Save Edited Task */

function saveTask(id) {

    const editInput = document.getElementById(`edit-${id}`);

    if (!editInput) {
        return;
    }

    const newTitle = editInput.value.trim();

    if (newTitle === "") {
        alert("Task cannot be empty.");
        editInput.focus();
        return;
    }

    const task = tasks.find(task => task.id === id);

    if (task) {
        task.title = newTitle;
    }

    saveTasks();
    renderTasks();
}


/* Cancel Edit */

function cancelEdit() {
    renderTasks();
}


/* Toggle Completed */

function toggleTask(id) {

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return;
    }

    task.completed = !task.completed;

    saveTasks();
    renderTasks();
}


/* Delete Task */

function deleteTask(id) {

    tasks = tasks.filter(task => task.id !== id);

    saveTasks();
    renderTasks();
}


/* Filter Tasks */

function filterTasks(filter, button) {

    currentFilter = filter;

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    renderTasks();
}


/* Prevent HTML Injection */

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


/* Enter Key */

taskInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});


/* Load Saved Tasks */

renderTasks();
