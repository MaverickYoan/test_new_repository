document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');
    const overlay = document.getElementById('overlay');

    const toggleMenu = () => {
        hamburgerMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    };

    hamburgerMenu.addEventListener('click', toggleMenu);
    closeMobileMenu.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});