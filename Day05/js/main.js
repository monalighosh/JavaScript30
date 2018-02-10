"use strict";
const galleryPanels = document.querySelectorAll(".gallery__panel");
galleryPanels.forEach((panel) => panel.addEventListener("click", animatePanel));
galleryPanels.forEach((panel) => panel.addEventListener("transitionend", animateTitles));

// Funtion to animate flex panel and center text
function animatePanel(){
  this.classList.toggle("open");
}

// Funtion to top and bottom text
function animateTitles(e){
  console.log(e.propertyName);
  e.propertyName === "font-size" ? this.classList.toggle("active") : false;
}


