Daily Task Planner

A responsive browser-based Daily Task Planner built using HTML5, CSS3, Bootstrap 5, and JavaScript. The application allows users to add, edit, complete, filter, and delete tasks while automatically saving tasks in the browser using localStorage.

🚀 Features
Display the current date
Add new tasks
Add tasks using the Enter key
Prevent empty tasks
Edit tasks inline
Save edited tasks
Cancel editing
Mark tasks as completed
Toggle completed tasks back to pending
Delete tasks
Filter tasks by:
All
Pending
Completed
Persist tasks using browser localStorage
Responsive design for desktop and mobile devices
Bootstrap 5 responsive layout
Font Awesome icons for task actions

🛠️ Technologies Used
HTML5 – Structure of the application
CSS3 – Custom styling and beige-themed UI
Bootstrap 5 – Responsive layout and UI components
JavaScript – DOM manipulation, events, CRUD operations, and filtering
LocalStorage – Persistent browser-side task storage
Font Awesome – Interface icons
Git & GitHub – Version control and repository hosting
Netlify – Deployment

📂 Project Structure
daily-task-planner/
│
├── index.html
├── style.css
├── script.js
└── README.md

📌 How It Works
1. Add Task

Enter a task in the input field and click the Add button. You can also press Enter to add the task.

2. Complete Task

Click the check icon to mark a task as completed. Completed tasks are displayed with a strike-through effect.

Click the check icon again to move the task back to the pending state.

3. Edit Task

Click the edit icon to modify a task.

The application provides:

Save
Cancel

The updated task is automatically saved to localStorage.

4. Delete Task

Click the delete icon to permanently remove a task from the current task list.

5. Filter Tasks

Tasks can be filtered using three options:

All        → Displays all tasks
Pending    → Displays incomplete tasks
Completed  → Displays completed tasks
6. LocalStorage

Tasks are stored in the browser using JavaScript localStorage.

Therefore, tasks remain available even after refreshing the page on the same browser and device.
