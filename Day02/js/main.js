"use strict";
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondsHand = document.querySelector(".seconds");

function clockHandsMovement() {
  const today = new Date();
  const seconds = today.getSeconds();
  const minutes = today.getMinutes();
  const hours = today.getHours();
  const secondDeg = ((seconds / 60) * 360) + 90;
  // const minuteDeg = ((minutes / 60) * 360) + 90;
  // const hoursDeg = ((hours / 24) * 360) + 90;
  secondsHand.style.transform = `rotate(${secondDeg}deg)`;
  console.log(minutes, hours);
}
setInterval(clockHandsMovement, 1000)
