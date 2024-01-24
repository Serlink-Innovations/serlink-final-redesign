function toggleMobileNav(navToggle) {
    navToggle = document.querySelector(".nav");
    removeContainer = document.querySelector(".navbar")

    if (navToggle.classList.contains("nav")) {
        navToggle.classList.toggle("show");
        removeContainer.classList.toggle("container");
    }
}

window.onscroll = function () {

    var navbar = document.querySelector('.navigation')

    if (window.scrollY > 0) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}