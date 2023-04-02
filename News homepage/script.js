const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
const navBar = document.querySelector(".nav-items");
const overlay = document.querySelector(".overlay");

btnMenu.addEventListener("click", function () {
    navBar.style.transform = "translateX(0)";
    overlay.style.display = "block";
});

btnClose.addEventListener("click", function() {
    navBar.style.transform = "translateX(100vw)";
    overlay.style.display = "none"

});

overlay.addEventListener("click", function() {
    navBar.style.transform = "translateX(100vw)";
    overlay.style.display = "none"
});