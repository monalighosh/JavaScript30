"use strict";
const audioList = document.querySelectorAll("audio");

// Adding click event listener to each key
document.addEventListener("keypress", playSound);

// Function to play sound on key press
function playSound(e){
  console.log(e.key);
  // this.classList.add("play");
  const keyCode = e.charCode;
   audioList.forEach(function(audio){
   const audioKey = parseInt(audio.dataset.key);
    keyCode === audioKey ? audio.play() : false;
  });

}

