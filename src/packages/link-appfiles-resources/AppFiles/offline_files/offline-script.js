let clickCount = 0;
const button = document.getElementById('clickMe');
const counter = document.getElementById('counter');

button.addEventListener('click', () => {
    clickCount++;
    counter.textContent = `Button clicks: ${clickCount}`;
    
    // Add a small animation to the button
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 100);
});

// Add a welcome message to the console
console.log('Welcome to my web page!');