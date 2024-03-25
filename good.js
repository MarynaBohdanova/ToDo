class Task {
    constructor(name, removeCallback) {
      this.name = name;
      this.removeCallback = removeCallback;
    }
  
    display(container) {
      const taskDiv = document.createElement("div");
      taskDiv.innerHTML = `
        <div class='task'>
          <div class='task-text'>${this.name}</div>
          <div class='task-actions'>
            <button class='action-remove'>Remove</button>
          </div>
        </div>
      `;
      
      const removeButton = taskDiv.querySelector(".action-remove");
      removeButton.addEventListener("click", () => {
        this.removeCallback(this.name);
        taskDiv.remove();
      });
  
      container.appendChild(taskDiv);
    }
  }
  

  class ToDo {
    constructor() {
      this.tasks = [];
      this.start();
    }
  
    start() {
      const newTaskInput = document.querySelector("#new-task");
      newTaskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          const taskName = document.querySelector("#new-task").value.trim();;
          if (taskName) {
            this.addTask(taskName);
            document.querySelector("#new-task").value = "";
          } else {
            console.log("No task to add");
          }
        }
      });
    }
  
    addTask(taskName) {
      const newTask = new Task(taskName, this.removeTask.bind(this));
      this.tasks.push(newTask);
      newTask.display(document.querySelector("#tasks"));
    }
  
    removeTask(taskToRemove) {
      this.tasks = this.tasks.filter((task) => task.name !== taskToRemove);
    }
  }
  
  new ToDo();
  