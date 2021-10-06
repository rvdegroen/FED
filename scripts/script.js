console.log("test");
/*
var hamburgerButton = document.querySelector("header button:first-of-type"),
    closeNavButton = document.querySelector("header button:nth-of-type(2)"),
    mobileNav = document.querySelector("nav"),
    //de streepjes die ik wil animeren in het hamburger menu 
    hambrugerStreep1 = document.querySelector("header > button span:nth-of-type(1)"),
    hamburgerStreep2 = document.querySelector("header > button span:nth-of-type(2)"),
    hamburgerStreep3 = document.querySelector("header > button span:nth-of-type(3)");


//mobileNav.classList.add("hidenav");
mobileNav.classList.add("hidenav");

function nav() {
    hambrugerStreep1.classList.add("streep1");
    hamburgerStreep2.classList.add("streep2");
    hamburgerStreep3.classList.add("streep3");
}

hamburgerButton.addEventListener("click", nav);
*/

var hamburgerButton = document.querySelector("header button:first-of-type"),
    header = document.querySelector("header"),
    closeNavButton = document.querySelector("nav > button");

function navClose() {
    header.classList.add("hidenav");
}

function navToggle() {
    header.classList.toggle("hidenav");
}

hamburgerButton.addEventListener("click", navToggle);
closeNavButton.addEventListener("click", navClose);

/*hamburger menu icon hover animation*/
/*header > button span:nth-of-type(1){
    background:transparent;
    transform: translateX(-1.5em);
}

header > button span:nth-of-type(2){
    transform: rotate(-45deg);
}

header > button span:nth-of-type(3){
    transform: rotate(45deg);
}*/