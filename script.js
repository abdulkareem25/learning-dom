// Beginner Level

// 1) Create a button that changes the page background color when clicked

// const button = document.querySelector('button')
// const num = () => (Math.floor(Math.random() * 256));

// button.addEventListener('click', () => {
//     document.body.style.backgroundColor = `rgb(${num()}, ${num()}, ${num()})`;
// })

// 2) Build a counter that increases/decreases with button clicks

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

// 3) Make an image that hides/shows when button is clicked

// let image = document.querySelector('img');
// let btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     image.className = image.classList.contains('hidden') ? 'image' : 'image hidden';
//     btn.innerText = image.classList.contains('hidden') ? 'Show Image' : 'Hide Image';
// })

// 4) Create an input that shows typed text in real-time below it

// let input = document.querySelector('input');
// let display = document.querySelector('.text-display');

// input.addEventListener('input', () => {
//     display.textContent = input.value;
// })


// Intermediate Level

// 5) Build a todo list that adds/removes items

// const tasks = document.querySelector('.tasks');
// const textInput = document.querySelector('#textInput');
// const addBtn = document.querySelector('.add-btn');
// const noTasksMessage = document.querySelector('#notasks');

// const noTasks = () => {
//     if (tasks.childElementCount === 1) noTasksMessage.style.display = 'block'
//     else noTasksMessage.style.display = 'none';
// }

// const createTask = (text) => {
//     const task = document.createElement('div');
//     task.className = 'task';

//     const taskText = document.createElement('span');
//     taskText.className = 'task-text';
//     taskText.textContent = text;

//     const taskBtns = document.createElement('div');
//     taskBtns.className = 'task-btns';

//     const doneBtn = document.createElement('div');
//     doneBtn.className = 'done-btn';
//     doneBtn.dataset.action = 'done';
//     doneBtn.textContent = '✓';

//     const deleteBtn = document.createElement('div');
//     deleteBtn.className = 'delete-btn';
//     deleteBtn.dataset.action = 'delete';
//     deleteBtn.textContent = '✕';

//     taskBtns.appendChild(doneBtn);
//     taskBtns.appendChild(deleteBtn);

//     task.appendChild(taskText);
//     task.appendChild(taskBtns);

//     tasks.appendChild(task);
// }

// addBtn.addEventListener('click', () => {
//     let text = textInput.value;
//     if (!text || text.trim() === "") {
//         alert("please first write your task and then add!")
//     } else {
//         createTask(text);
//         textInput.value = "";
//         noTasks();
//     }
// })

// tasks.addEventListener('click', (e) => {
//     if (e.target.dataset.action === 'done') {
//         const task = e.target.parentElement.previousSibling;
//         task.style.textDecoration = task.style.textDecoration === "line-through" ? "none" : "line-through";
//         e.target.style.backgroundColor = e.target.style.backgroundColor === "" ? "green" : "";
//     }

//     if (e.target.dataset.action === 'delete') {
//         const task = e.target.closest('.task');
//         const text = e.target.parentElement.previousSibling;

//         if(text.style.textDecoration === "line-through") {
//             tasks.removeChild(task);
//         } else {
//             alert('finish the task first.')
//         }

//         noTasks()
//     }
// })

// 6) Create a form that validates email and password

// const formEl = document.querySelector('form');
// const emailEl = document.querySelector('#email')
// const passwordEl = document.querySelector('#password')
// const submitBtn = document.querySelector('button');

// const validateForm = (e) => {
//     e.preventDefault()
//     const email = emailEl.value.trim()
//     const password = passwordEl.value

//     if(!email || !password) {
//         console.error("All fields are required.");
//         return
//     }

//     if(password.length < 8) {
//         console.error("password length must be 8 characters long");
//         return
//     }

//     emailEl.value = "";
//     passwordEl.value = "";
//     console.log("authentication sucessful!")
// }

// formEl.addEventListener('submit', validateForm)

// 7) Make a image gallery with next/previous buttons

// const nextBtn = document.querySelector('.next-btn');
// const prevBtn = document.querySelector('.prev-btn');
// const galleryEl = document.querySelector('.gallery-img');
// const totalImgsEl = document.querySelector('.total-imgs');
// const currentImgEl = document.querySelector('.current-img');

// const natureImages = [
//     "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
//     "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
//     "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
//     "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
//     "https://images.unsplash.com/photo-1503264116251-35a269479413",
//     "https://images.unsplash.com/photo-1437623889155-075d40e2e59f",
//     "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66" 
// ];

// let currentImg = 1;

// const setImage = (currentImg) => {
//     galleryEl.setAttribute('src', `${natureImages[currentImg - 1]}`)
//     currentImgEl.textContent = currentImg;
//     totalImgsEl.textContent = natureImages.length;
// }

// setImage(currentImg);

// nextBtn.addEventListener('click', () => {
//     currentImg++;
//     if (currentImg === natureImages.length + 1) {
//         currentImg = 0;
//     }
//     setImage(currentImg);
// });

// prevBtn.addEventListener('click', () => {
//     currentImg--;
//     if (currentImg === 0) {
//         currentImg = natureImages.length;
//     }
//     setImage(currentImg);
// });

// 8) Build a simple calculator with basic operations

// const display = document.querySelector('.display');
// const buttons = document.querySelectorAll('.btn');
// const clearBtn = document.querySelector('.btn.clear');
// const backspaceBtn = document.querySelector('.btn.backspace');
// const equalsBtn = document.querySelector('.btn.equals');
// const operatorBtns = document.querySelectorAll('.btn.operator:not(.equals)');
// const decimalBtn = document.querySelector('.btn.decimal');

// let displayValue = '0';
// let previousValue = '';
// let operation = null;
// let shouldResetDisplay = false;

// const updateDisplay = () => {
//     display.value = displayValue;
// };

// const handleNumberClick = (num) => {
//     if (shouldResetDisplay) {
//         displayValue = num;
//         shouldResetDisplay = false;
//     } else {
//         displayValue = displayValue === '0' ? num : displayValue + num;
//     };
//     updateDisplay();
// };

// const handleOperation = (op) => {

//     if (operation !== null && !shouldResetDisplay) {
//         calculate();
//     }

//     previousValue = displayValue;
//     operation = op;
//     shouldResetDisplay = true;
// }

// const calculate = () => {

//     if (operation === null || shouldResetDisplay) return;

//     const prev = parseFloat(previousValue);
//     const current = parseFloat(displayValue);
//     let result;

//     switch (operation) {
//         case '+': result = prev + current; break;
//         case '-': result = prev - current; break;
//         case '*': result = prev * current; break;
//         case '/': result = prev / current; break;
//         default: return;
//     };

//     displayValue = result.toString();
//     operation = null;
//     shouldResetDisplay = true;
//     updateDisplay();
// };

// const handleDecimal = () => {
//     if (displayValue === '0') {
//         displayValue = '0.';
//         shouldResetDisplay = false;
//     } else if (!displayValue.includes('.')) {
//         displayValue += '.';
//     };
//     updateDisplay();
// };

// const handleClear = () => {
//     displayValue = '0';
//     previousValue = '';
//     operation = null;
//     shouldResetDisplay = false;
//     updateDisplay();
// };

// const handleBackspace = () => {
//     if (displayValue.length > 1) {
//         displayValue = displayValue.slice(0, -1);
//     } else {
//         displayValue = '0';
//     };
//     updateDisplay();
// };

// buttons.forEach(btn => {
//     if (!btn.classList.contains('clear') &&
//         !btn.classList.contains('backspace') &&
//         !btn.classList.contains('equals') &&
//         !btn.classList.contains('operator') &&
//         !btn.classList.contains('decimal')) {
//         btn.addEventListener('click', () => handleNumberClick(btn.textContent));
//     };
// });

// operatorBtns.forEach(btn => {
//     btn.addEventListener('click', () => handleOperation(btn.textContent));
// });

// equalsBtn.addEventListener('click', calculate);
// clearBtn.addEventListener('click', handleClear);
// backspaceBtn.addEventListener('click', handleBackspace);
// decimalBtn.addEventListener('click', handleDecimal);
// updateDisplay();


// Advanced Level

// 9) Create a notes app that saves to localStorage

const notesListEl = document.getElementById('notes-list');
const notesCountEl = document.getElementById('notes-count');
const input = document.getElementById('note-title');
const textarea = document.getElementById('note-body');
const addBtn = document.getElementById('add-note');
const clearBtn = document.getElementById('clear-composer');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

function updateCount() {
    const notesCount = notesListEl.childElementCount;
    notesCountEl.innerText = notesCount === 1 ? "1 note" : `${notesCount} notes`;
}

function updateEmptyState() {
    notesListEl.classList.toggle('is-empty', notesListEl.childElementCount === 0)
}
updateEmptyState()

function renderNotes(notes) {

    notesListEl.innerHTML = "";

    const frag = document.createDocumentFragment();
    notes.map((data, id) => {
        const listEl = document.createElement('li');
        listEl.classList.add('note-card');
        listEl.dataset.index = id;

        const headerEl = document.createElement('header');
        headerEl.classList.add('note-head');

        const titleEl = document.createElement('h3');
        titleEl.classList.add('note-title-text');
        titleEl.innerText = data.title || "";

        const btns = document.createElement('div');
        const delBtn = document.createElement('button');
        delBtn.classList.add('icon-btn');
        delBtn.classList.add('delete')
        delBtn.dataset.action = 'delete';
        delBtn.title = "Delete";
        delBtn.innerHTML = `<i class="ri-delete-bin-line"></i>`;
        btns.appendChild(delBtn);

        headerEl.appendChild(titleEl);
        headerEl.appendChild(btns);

        const noteEl = document.createElement('div');
        noteEl.classList.add('note-body-text');
        noteEl.innerText = data.note;

        listEl.appendChild(headerEl);
        listEl.appendChild(noteEl);

        frag.appendChild(listEl);
    });
    notesListEl.appendChild(frag);
    updateCount();
}

renderNotes(notes);

addBtn.addEventListener('click', () => {

    let obj = {
        title: "",
        note: ""
    };

    if (input.value.trim() !== "") {
        obj.title = input.value.trim();
    }

    if (textarea.value.trim() === "") return alert('you must write some note in the textarea!');

    obj.note = textarea.value.trim();

    notes.push(obj);

    input.value = '';
    textarea.value = '';

    renderNotes(notes);

    localStorage.setItem('notes', JSON.stringify(notes))

});

clearBtn.addEventListener('click', () => {
    input.value = '';
    textarea.value = '';
});

notesListEl.addEventListener('click', (e) => {
    if (e.target.closest('.delete')) {
        let noteEl = e.target.closest('li');
        let index = Number(noteEl.dataset.index);
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes(notes)
    } else return
});