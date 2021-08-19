function menuToggle() {
    var nav = document.getElementById('menu-overlay');
    nav.classList.toggle('active');
   
}
var icon = document.getElementById('toggleIcon');
icon.onclick = menuToggle;

const images = document.querySelectorAll(".image-carousel img");
images.forEach(function(image){
    image.onclick = function(event){
document.querySelector(".selected-image").classList.remove("selected-image");
const clickParent = event.target.parentNode;
clickParent.classList.add("selected-image");
    }
})