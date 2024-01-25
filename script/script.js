function displayForm() {
    addTaskButton.style.display = "none";

    let createTaskForm = `
    <form name="createTaskForm">
        <input name="taskText" type="text">
        <button type="button" id="createTaskButton">Добавить задачу</button>
    </form>
    `;

    let main = document.getElementById('main');
    main.insertAdjacentHTML("beforeend", createTaskForm);

    let createTaskButton = document.getElementById('createTaskButton');
    createTaskButton.onclick = function () {
        createTask();
        removeForm();
    };
}

function createTask() {
    let taskText = document.createTaskForm.taskText.value;

    let task = `
    <p>${taskText}</p>
    `;

    let list = document.getElementById('tasks');
    list.insertAdjacentHTML("beforeend", task);
}

function removeForm() {
    document.forms.createTaskForm.remove();
    addTaskButton.style.display = "block";
}

let addTaskButton = document.getElementById('addTaskButton');
addTaskButton.onclick = displayForm;