function toggleMobileNav(navToggle) {
    navToggle = document.querySelector(".nav");

    if (navToggle.classList.contains("nav")) {
        navToggle.classList.toggle("show")
    }
}