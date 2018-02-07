"use strict";
const hourHand = document.querySelector(".hour");
const minutesHand = document.querySelector(".minute");
const secondsHand = document.querySelector(".seconds");

function clockHandsMovement() {
  const today = new Date();
  const seconds = today.getSeconds();
  const minutes = today.getMinutes();
  const hours = today.getHours();
  const secondDeg = ((seconds / 60) * 360) + 90;
  const minuteDeg = ((minutes / 60) * 360) + 90;
  const hourDeg = ((hours / 12) * 360) + 90;
  secondsHand.style.transform = `translateX(9%) rotate(${secondDeg}deg)`;
  minutesHand.style.transform = `translateX(23%) rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `translateX(40%) rotate(${hourDeg}deg)`;
}
setInterval(clockHandsMovement, 1000);
