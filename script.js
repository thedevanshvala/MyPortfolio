document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behaviour:'smooth'
        });
    });
});

// theme-toggle.js

// Select the toggle button
const toggleButton = document.getElementById('theme-toggle');

// Function to toggle theme
function toggleTheme() {
    // Toggle 'light-theme' class on the body element
    document.body.classList.toggle('light-theme');

    // Save the current theme to localStorage
    if (document.body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
}

// Add click event listener to the toggle button
toggleButton.addEventListener('click', toggleTheme);

// On page load, check the saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
});
