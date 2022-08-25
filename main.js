const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const menuMobileIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

menuEmail.addEventListener('click', toogleDesktopMenu)
menuMobileIcon.addEventListener('click', tooglemobileMenu)

function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')    
}

function tooglemobileMenu() {
    mobileMenu.classList.toggle('inactive')    
}