const menuBtn = document.querySelector('.menu-btn');
const menuMobil = document.querySelector('.menu-mobil');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuMobil.classList.add('active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuMobil.classList.remove('active');
        menuOpen = false;
    }
});
