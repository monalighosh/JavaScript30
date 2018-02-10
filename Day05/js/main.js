"use strict";
const galleryPanels = document.querySelectorAll(".gallery__panel");
galleryPanels.forEach((panel) => panel.addEventListener("click", animatePanel));
galleryPanels.forEach((panel) => panel.addEventListener("transitionend", animateTitles));

function animatePanel(){
  this.classList.toggle("open");
}

function animateTitles(e){
  console.log(e.propertyName);
  e.propertyName === "font-size" ? this.classList.toggle("active") : false;
}


