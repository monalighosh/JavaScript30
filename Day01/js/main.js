"use strict";

// Adding keydown event listener to each key
window.addEventListener("keydown", playSound);

// Function to play sound on key press
function playSound(e){
  const audioEle = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keyEle = document.querySelector(`li[data-key="${e.keyCode}"]`);
  if (audioEle === null) { // For keys without sound effect
    return;
  } 
  audioEle.currentTime = 0; // Rewinds audio 
  audioEle.play(); // Plays the audio
  keyEle.classList.add("play"); // Adds new class to the key for click effect
}

// Function to remove click effect class from the keys
const drumKeys = document.querySelectorAll("[class='drum-keys__items']");

