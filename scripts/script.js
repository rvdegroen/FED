//variabelen voor mijn hamburger menu
var hamburgerButton = document.querySelector("header button:first-of-type"),
    header = document.querySelector("header"),
    closeNavButton = document.querySelector("nav > button");
//variabelen voor back to top button
var backToTopButton = document.querySelector("footer>button");
//variabelen voor de more topics button 
var topicButton = document.querySelector("section:nth-of-type(2)>button");


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

//function om de more topics button te laten werken
function moreTopics() {
    window.location.href = "./topic.html";
}

//eventlisteners voor mijn hamburger menu
hamburgerButton.addEventListener("click", navToggle);
closeNavButton.addEventListener("click", navClose);
//eventlistener voor mijn back to top button
backToTopButton.addEventListener("click",backToTop);
// eventlistener die more topics laat werken
topicButton.addEventListener("click", moreTopics);
