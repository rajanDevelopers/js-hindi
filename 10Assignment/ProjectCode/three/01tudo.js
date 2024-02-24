function addTask() {
  // Get input value
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value;

  // Check if the input is not empty
  if (taskText.trim() !== "") {
    // Create a new list item
    var listItem = document.createElement("li");
    listItem.className = "todoItem";

    // Create a span for the task text
    var taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Create a button to delete the task
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
      listItem.remove();
    };

    // Append the task text and delete button to the list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);

    // Append the list item to the todoList
    document.getElementById("todoList").appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
  }
}
