// Function to toggle the navbar burger menu open or close
function toggleNavbarBurger() {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');

    if (burger && menu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    }
}

// Initialize the function
toggleNavbarBurger();