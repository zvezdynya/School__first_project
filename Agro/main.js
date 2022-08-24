//Burger handler//

(function () {
    const header__burgerItem = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');
    const menuCloseItem = document.querySelector('.header__menu-close')
    header__burgerItem.addEventListener('click', () => {
        menu.classList.add('header__menu_active');
});
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__menu_active');       
});
}());