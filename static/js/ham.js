

var menu = document.querySelector(".menu");
var ham = document.querySelector(".ham");
var xIcon = document.querySelector(".xIcon");
var menuIcon = document.querySelector(".menuIcon");
var section3 = document.getElementById("section3");

ham.addEventListener("click", toggleMenu);

//toggle menu in and out when clicking the button
function toggleMenu() {
    if (menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu");
        xIcon.hidden = true;
        menuIcon.hidden = false;
    } else {
        menu.classList.add("showMenu");
        xIcon.hidden = false;
        menuIcon.hidden = true;
    }
}

var menuLinks = document.querySelectorAll(".menuLink");

menuLinks.forEach(
    function(menuLink) {
        menuLink.addEventListener("click", toggleMenu)
    }
)

// Hide Selected Elements on Mobile
    if(window.innerWidth<=700 && section3){
        section3.remove();
    }    
