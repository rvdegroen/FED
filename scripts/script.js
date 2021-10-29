//variabelen voor mijn hamburger menu
var hamburgerButton = document.querySelector("header button:first-of-type"),
    header = document.querySelector("header"),
    closeNavButton = document.querySelector("nav > button");
//variabelen voor back to top button
var backToTopButton = document.querySelector("footer>button");


//functions voor mijn hamburger menu
function navClose() {
    header.classList.add("hidenav");
}

function navToggle() {
    header.classList.toggle("hidenav");
}

//function back to top button
function backToTop() {
    window.scrollTo(0,0);
}

//eventlisteners voor mijn hamburger menu
hamburgerButton.addEventListener("click", navToggle);
closeNavButton.addEventListener("click", navClose);
//eventlistener voor mijn back to top button
backToTopButton.addEventListener("click",backToTop);
