const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const carIcon = document.querySelector('.navbar-shopping-cart')

const menuMobileIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toogleDesktopMenu)
menuMobileIcon.addEventListener('click', tooglemobileMenu)
carIcon.addEventListener('click', toogleaside)

function toogleDesktopMenu() {
    const asideClosed = aside.classList.contains('inactive');

    if (!asideClosed) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')    
}

function tooglemobileMenu() {
    const asideClosed = aside.classList.contains('inactive');

    if (!asideClosed) {
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')    
}

function toogleaside() {
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!mobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    if (!desktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive')
}