document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".header__hamburger");
    const nav = document.querySelector(".header__nav");
    const overlay = document.getElementById('overlay');
    const body = document.body;

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("nav--open");
        hamburger.classList.toggle("open");
        overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
        body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', () => {
        nav.classList.remove('nav--open');
        hamburger.classList.remove('open');
        overlay.style.display = 'none';
        body.classList.remove('no-scroll');
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            nav.classList.remove("nav--open");
            hamburger.classList.remove("open");
            overlay.style.display = 'none';
            body.classList.remove('no-scroll');
        }
    });
});
