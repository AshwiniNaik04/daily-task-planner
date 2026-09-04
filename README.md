# Daily Task Planner

A responsive browser-based **Daily Task Planner** built using HTML5, CSS3, Bootstrap 5, and JavaScript. It allows users to add, edit, complete, filter, and delete tasks while storing them in the browser using `localStorage`.

## 🚀 Features

* Display the current date
* Add new tasks
* Add tasks using the **Enter** key
* Prevent empty tasks
* Edit tasks inline
* Save edited tasks
* Cancel editing
* Mark tasks as completed
* Toggle tasks between completed and pending
* Delete tasks
* Filter tasks by All, Pending, or Completed
* Store tasks using browser `localStorage`
* Responsive design for desktop and mobile
* Bootstrap 5 layout
* Font Awesome icons

## 🛠️ Technologies Used

* HTML5
* CSS3
* Bootstrap 5
* JavaScript
* LocalStorage
* Font Awesome
* Git & GitHub
* Netlify

## 📂 Project Structure

```text
daily-task-planner/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 📌 How It Works

### 1. Add Task

Enter a task in the input field and click the **Add** button. You can also press **Enter** to add a task.

### 2. Complete Task

Click the **check icon** to mark a task as completed. The task will appear with a strike-through effect.

Click the check icon again to move the task back to pending.

### 3. Edit Task

Click the **edit icon** to modify a task. The task can then be updated using the **Save** button or reverted using **Cancel**.

### 4. Delete Task

Click the **delete icon** to remove a task from the task list.

### 5. Filter Tasks

Tasks can be filtered using:

* **All** – Displays all tasks
* **Pending** – Displays incomplete tasks
* **Completed** – Displays completed tasks

### 6. LocalStorage

Tasks are stored in the browser using JavaScript `localStorage`, so the task list remains available after refreshing the page on the same browser and device.
