document.addEventListener("DOMContentLoaded", (e) => {
  const taskInput = document.getElementById("new-task");
  const addButton = document.getElementById("add_button");
  const editButtons = document.querySelectorAll('.edit');



  const handleUncheckBox = (e) => {


    const checked = !e.target.checked;
    const parent = e.target.parentElement;

    const labelValue = parent.querySelector("label").textContent;
    const listOfIncompleteTasks = document.getElementById("incomplete-tasks");

    if (!checked) {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      const label = document.createElement("label");
      label.textContent = labelValue;
      const edit = document.createElement("button");
      edit.className = "edit";
      edit.textContent = "Edit";
      const deleteButton = document.createElement("button");
      deleteButton.className = "delete";
      deleteButton.textContent = "Delete";

      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(edit);
      li.appendChild(deleteButton);

      listOfIncompleteTasks.prepend(li);

      listOfIncompleteTasks
        .querySelectorAll("li input[type='checkbox']")[0]
        .addEventListener("change", handleCheckBox);
    }

    parent.remove();


  }


  ///when try to enable the edit i have issues with checkBox, so i commented all related code to the Edit

  // const handleEditButtonClick = (e) => {

  //   const clicked = e.target.clicked;
  //   const listOfcompletedTasks = document.getElementById("completed-tasks");
  //   const inputField = listItem.querySelector('button .edit');

  //   inputField.removeAttribute('readonly');


  //   if (clicked) {

  //     const newValue = prompt("Enter new value:");
  //     if (newValue !== null) {
  //       inputField.value = newValue;
  //     }


  //     const li = document.createElement("li");
  //     const checkbox = document.createElement("input");
  //     checkbox.type = "text";
  //     const label = document.createElement("label");
  //     label.textContent = newValue;
  //     const edit = document.createElement("button");
  //     edit.className = "edit";
  //     edit.textContent = "Edit";
  //     const deleteButton = document.createElement("button");
  //     deleteButton.className = "delete";
  //     deleteButton.textContent = "Delete";

  //     li.appendChild(checkbox);
  //     li.appendChild(label);
  //     li.appendChild(edit);
  //     li.appendChild(deleteButton);

  //     listOfcompletedTasks.prepend(li);


  //   }
  // }


  const handleCheckBox = (e) => {
    debugger;
    const checked = e.target.checked;
    const parent = e.target.parentElement;

    const labelValue = parent.querySelector("label").textContent;
    const listOfcompletedTasks = document.getElementById("completed-tasks");

    if (checked) {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      const label = document.createElement("label");
      label.textContent = labelValue;
      const edit = document.createElement("button");
      edit.className = "edit";
      edit.textContent = "Edit";
      const deleteButton = document.createElement("button");
      deleteButton.className = "delete";
      deleteButton.textContent = "Delete";

      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(edit);
      li.appendChild(deleteButton);

      listOfcompletedTasks.prepend(li);

      listOfcompletedTasks
        .querySelectorAll("li input[type='checkbox']")[0]
        .addEventListener("change", handleUncheckBox);
    }

    // listOfcompletedTasks
    //   .querySelectorAll("li button .edit")
    //   .addEventListener("click", handleEditButtonClick);


    parent.remove();
  };


  const addTask = (e) => {
    const newTaks = taskInput.value;
    const listOfIncompleteTasks = document.getElementById("incomplete-tasks");
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    label.textContent = newTaks;
    const edit = document.createElement("button");
    edit.className = "edit";
    edit.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "Delete";

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(edit);
    li.appendChild(deleteButton);

    listOfIncompleteTasks.prepend(li);

    listOfIncompleteTasks
      .querySelectorAll("li input[type='checkbox']")[0]
      .addEventListener("change", handleCheckBox);

    // listOfIncompleteTasks
    //   .querySelectorAll("li input[type='text'] .edit")
    //   .addEventListener("Click", handleEditButtonClick);

    taskInput.value = "";
  };

  addButton.addEventListener("click", addTask);

  debugger;

  document
    .querySelectorAll("#incomplete-tasks input[type='checkbox']")
    .forEach((checkBox) => {
      checkBox.addEventListener("change", handleCheckBox);
    });


  // document
  //   .querySelectorAll("#incomplete-tasks input[type='text'] .edit")
  //   .forEachforEach(button => {
  //     button.addEventListener('click', handleEditButtonClick);
  //   });








});
