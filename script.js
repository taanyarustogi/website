const filterButtons = document.querySelector("#project-filt").children;
const items = document.querySelector(".project-gallery").children;

for(let i=0; i<filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function(){
        for(let j=0; j<filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")

        for(let k=0; k<items.length; k++) {
            items[k].style.display = "none";
            if(target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if (target=="all") {
                items[k].style.display="block";
            }
        }
    })
}

var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

function togglePopup1(){
    document.getElementById("popup1").classList.toggle("active");
}
function togglePopup2(){
    document.getElementById("popup2").classList.toggle("active");
}
function togglePopup3(){
    document.getElementById("popup3").classList.toggle("active");
}
function togglePopup4(){
    document.getElementById("popup4").classList.toggle("active");
}
function autoscroll(){
    document.getElementById("project").scrollIntoView(true);
}
