/*3 regels die we gebruiken:
var = button
function(){}
button.addEventListener("click",function(){})*/

var closeNavButton = document.querySelector("nav button:nth-of-type(2)"),
    nav = document.querySelector("nav");

nav.classList.add(".hideHamburgerMenu");
