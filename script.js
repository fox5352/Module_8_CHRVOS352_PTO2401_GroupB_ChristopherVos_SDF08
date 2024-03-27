const navBtn = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav');


navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('nav-toggle-active');
    navMenu.classList.toggle('nav-active');

    // add eventlistener to check if menu item is click
    navMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navBtn.classList.remove('nav-toggle-active');
            navMenu.classList.remove('nav-active');
        }
    });
});