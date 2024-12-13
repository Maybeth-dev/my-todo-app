 document.getElementById("updateButton").style.display = "none";

  let taskArray = [];
  let updateIndex = null;
 
  function addTask() {
      let task = document.getElementById("task-input").value;
      let date = document.getElementById("date-input").value;
      let description = document.getElementById("description-input").value;

      let taskObj = { task: task, date: date, description: description };
      taskArray.push(taskObj);

      // Clear form after adding
      document.getElementById("task-input").value = "";
      document.getElementById("date-input").value = "";
      document.getElementById("description-input").value = "";

      // Display updated table
      displayTable();
  }
 
  function displayTable() {
      let showTable = "";

      for (let i in taskArray) {
          showTable += `<tr>
              <td>${Number(i) + 1}</td>
              <td>${taskArray[i].task}</td>
              <td>${taskArray[i].date}</td>
              <td>${taskArray[i].description}</td>
              <td>
                  <button onclick="editTask(${i})">Edit</button>
                  <button onclick="deleteTask(${i})">Delete</button>
              </td>
          </tr>`;
      }

      document.getElementById("show").innerHTML = showTable;
  }

  // Function to edit a task
  function editTask(k) {
      document.getElementById("updateButton").style.display = "block";
      document.getElementById("addButton").style.display = "none";

      // Fill form with selected task's data
      document.getElementById("task-input").value = taskArray[k].task;
      document.getElementById("date-input").value = taskArray[k].date;
      document.getElementById("description-input").value = taskArray[k].description;

      updateIndex = k; // Store the index for updating
  }

  // Function to update the task
  function updateTask() {
      let task = document.getElementById("task-input").value;
      let date = document.getElementById("date-input").value;
      let description = document.getElementById("description-input").value;

      // Update task with new values
      taskArray[updateIndex] = { task: task, date: date, description: description };

      // Reset form and buttons
      document.getElementById("updateButton").style.display = "none";
      document.getElementById("addButton").style.display = "block";
      
      displayTable();

      // Clear the form after updating
      document.getElementById("task-input").value = "";
      document.getElementById("date-input").value = "";
      document.getElementById("description-input").value = "";
  }

  // Function to delete a task
  function deleteTask(index) {
      taskArray.splice(index, 1); // Remove task from array
      displayTable(); // Re-render the table
  }   





   // let tasks = [];
    // let editIndex = null;

    // // Function to add a task
    // function addTask() {
    //     const task = document.getElementById('task-input').value;
    //     const date = document.getElementById('date-input').value;
    //     const description = document.getElementById('description-input').value;

    //     if (task && date && description) {
    //         tasks.push({ task, date, description });
    //         renderTasks();
    //         clearForm();
    //     } else {
    //         alert("All fields are required!");
    //     }
    // }

    // // Function to render tasks in the table
    // function renderTasks() {
    //     const taskTableBody = document.querySelector('#task-table tbody');
    //     taskTableBody.innerHTML = ''; // Clear the current table

    //     tasks.forEach((taskObj, index) => {
    //         const row = document.createElement('tr');

    //         row.innerHTML = `
    //             <td>${index + 1}</td>
    //             <td>${taskObj.task}</td>
    //             <td>${taskObj.date}</td>
    //             <td>${taskObj.description}</td>
    //             <td>
    //                 <button onclick="editTask(${index})">Edit</button>
    //                 <button onclick="deleteTask(${index})">Delete</button>
    //             </td>
    //         `;

    //         taskTableBody.innerHTML(row);
    //     });
    // }

    // // Function to delete a task
    // function deleteTask(index) {
    //     tasks.splice(index, 1);
    //     renderTasks();
    // }

    // // Function to edit a task (load task details into form)
    // function editTask(index) {
    //     const task = tasks[index];

    //     document.getElementById('task-input').value = task.task;
    //     document.getElementById('date-input').value = task.date;
    //     document.getElementById('description-input').value = task.description;

    //     editIndex = index;

    //     // Show update button, hide add button
    //     document.getElementById('add-btn').style.display = 'none';
    //     document.getElementById('up-btn').style.display = 'inline-block';
    // }

    // // Function to update a task
    // function updateTask() {
    //     const task = document.getElementById('task-input').value;
    //     const date = document.getElementById('date-input').value;
    //     const description = document.getElementById('description-input').value;

    //     if (task && date && description) {
    //         tasks[editIndex] = { task, date, description };
    //         renderTasks();
    //         clearForm();

    //         // Hide update button, show add button
    //         document.getElementById('add-btn').style.display = 'inline-block';
    //         document.getElementById('update-btn').style.display = 'none';

    //         editIndex = null;
    //     } 
    // }

    // // Function to clear the form
    // function clearForm() {
    //     document.getElementById('task-input').value = '';
    //     document.getElementById('date-input').value = '';
    //     document.getElementById('description-input').value = '';
    // }
        
