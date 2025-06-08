// Toggle Script JS

const toggleButton = document.getElementById('dark-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        toggleButton.textContent = 'Toggle Light Mode'
    } else {
        toggleButton.textContent = 'Toggle Dark Mode'
    }
});
