"use strict";
const controls = document.querySelectorAll(".controls input");
controls.forEach((control) => control.addEventListener("change", updateControls));
controls.forEach((control) => control.addEventListener("mousemove", updateControls));

// Function to update the variable values on change
function updateControls(){
 const suffix = this.dataset.sizing || ""; // Retrives the data attribute for suffix
 document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`); // Updates the style properties to the root element
}


