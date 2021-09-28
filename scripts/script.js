console.log("test");

var navBtnEl = document.querySelector("nav button"),
    nav = document.querySelector("nav"),
    h1Header = document.querySelector("header h1");

function hideNav() {
    nav.classList.add("hideNav");
}

function showNav() {
    nav.classList.remove("hideNav");
}

navBtnEl.addEventListener("click", hideNav);
h1Header.addEventListener("click", showNav);