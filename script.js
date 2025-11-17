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

let input = document.querySelector('input');
let display = document.querySelector('.text-display');

input.addEventListener('input', () => {
    display.textContent = input.value;
})