const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClose = aside.classList.contains('inactive');
    if (!isAsideClose){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isAsideClose = aside.classList.contains('inactive');
    if (!isAsideClose){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenyClose = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenyClose){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}