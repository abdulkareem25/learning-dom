// Beginner Level

// Create a button that changes the page background color when clicked

const button = document.querySelector('button')
const num = () => (Math.floor(Math.random() * 256));

button.addEventListener('click', () => {
    document.body.style.backgroundColor = `rgb(${num()}, ${num()}, ${num()})`;
})