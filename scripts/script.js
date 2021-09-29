console.log("test");

var navBtnEl = document.querySelector("nav button"),
    nav = document.querySelector("nav"),
    hamburgerMenu = document.querySelector("header h1 img");

function hideNav() {
    nav.classList.add("hideNav");
}

function showNav() {
    nav.classList.remove("hideNav");
}

navBtnEl.addEventListener("click", hideNav);
hamburgerMenu.addEventListener("click", showNav);