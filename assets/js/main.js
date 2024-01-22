function toggleMobileNav(navToggle) {
    navToggle = document.querySelector(".nav");
    removeContainer = document.querySelector(".navbar")

    if (navToggle.classList.contains("nav")) {
        navToggle.classList.toggle("show");
        removeContainer.classList.toggle("container");
    }
}