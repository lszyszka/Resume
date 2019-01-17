const burgerBtn = document.querySelector('.burger-icon');
const nav = document.querySelector('nav');

const showMenu = () => {
    nav.classList.toggle('active');
    burgerBtn.classList.toggle('active');
}

burgerBtn.addEventListener('click', showMenu);