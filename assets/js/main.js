let nav = document.querySelector(".nav");

function toggleMobileNav() {
    if (nav.display.style === 'none !important') {
        nav.display.style = 'flex !important'
    } else {
        nav.display.style = 'none !important'
    }
}