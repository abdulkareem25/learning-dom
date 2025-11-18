// Beginner Level

// Create a button that changes the page background color when clicked

// const button = document.querySelector('button')
// const num = () => (Math.floor(Math.random() * 256));

// button.addEventListener('click', () => {
//     document.body.style.backgroundColor = `rgb(${num()}, ${num()}, ${num()})`;
// })

// Build a counter that increases/decreases with button clicks

// let count = 0;
// const counter = document.querySelector('.counter');

// const up = document.querySelector('.up');
// const down = document.querySelector('.down');
// const reset = document.querySelector('.reset');
// const renderCount = () => {counter.textContent = count;};

// up.addEventListener('click', () => {
//     count++; 
//     renderCount();
// })
// down.addEventListener('click', () => {
//     count--;
//     renderCount();
// })
// reset.addEventListener('click', () => {
//     count = 0;
//     renderCount();
// })

// Make an image that hides/shows when button is clicked

// let image = document.querySelector('img');
// let btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     image.className = image.classList.contains('hidden') ? 'image' : 'image hidden';
//     btn.innerText = image.classList.contains('hidden') ? 'Show Image' : 'Hide Image';
// })

// Create an input that shows typed text in real-time below it

// let input = document.querySelector('input');
// let display = document.querySelector('.text-display');

// input.addEventListener('input', () => {
//     display.textContent = input.value;
// })


// Intermediate Level

// Build a todo list that adds/removes items

const tasks = document.querySelector('.tasks');
const textInput = document.querySelector('#textInput');
const addBtn = document.querySelector('.add-btn');
const noTasksMessage = document.querySelector('#notasks');

const noTasks = () => {
    if (tasks.childElementCount === 1) noTasksMessage.style.display = 'block'
    else noTasksMessage.style.display = 'none';
}

const createTask = (text) => {
    const task = document.createElement('div');
    task.className = 'task';

    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = text;

    const taskBtns = document.createElement('div');
    taskBtns.className = 'task-btns';

    const doneBtn = document.createElement('div');
    doneBtn.className = 'done-btn';
    doneBtn.dataset.action = 'done';
    doneBtn.textContent = '✓';

    const deleteBtn = document.createElement('div');
    deleteBtn.className = 'delete-btn';
    deleteBtn.dataset.action = 'delete';
    deleteBtn.textContent = '✕';

    taskBtns.appendChild(doneBtn);
    taskBtns.appendChild(deleteBtn);

    task.appendChild(taskText);
    task.appendChild(taskBtns);

    tasks.appendChild(task);
}

addBtn.addEventListener('click', () => {
    let text = textInput.value;
    if (!text || text.trim() === "") {
        alert("please first write your task and then add!")
    } else {
        createTask(text);
        textInput.value = "";
        noTasks();
    }
})

tasks.addEventListener('click', (e) => {
    if (e.target.dataset.action === 'done') {
        const task = e.target.parentElement.previousSibling;
        task.style.textDecoration = task.style.textDecoration === "line-through" ? "none" : "line-through";
        e.target.style.backgroundColor = e.target.style.backgroundColor === "" ? "green" : "";
    }

    if (e.target.dataset.action === 'delete') {
        const task = e.target.closest('.task');
        const text = e.target.parentElement.previousSibling;
        
        if(text.style.textDecoration === "line-through") {
            tasks.removeChild(task);
        } else {
            alert('finish the task first.')
        }

        noTasks()
    }
})