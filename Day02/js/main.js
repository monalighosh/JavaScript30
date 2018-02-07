"use strict";
const hourHand = document.querySelector(".hour");
const minutesHand = document.querySelector(".minute");
const secondsHand = document.querySelector(".seconds");

// Clock function
function clockTicking() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  /* 
  Calculates the clock hand's rotation degree 
  formula: ((currentTime / maxTime) * 360) + 90;
  where, 360 is a total degree roation and 90 is intial offset 
  */
  const secondDeg = ((seconds / 60) * 360) + 90;
  const minuteDeg = ((minutes / 60) * 360) + 90;
  const hourDeg = ((hours / 12) * 360) + 90;
  secondsHand.style.transform = `translateX(9%) rotate(${secondDeg}deg)`;
  minutesHand.style.transform = `translateX(23%) rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `translateX(40%) rotate(${hourDeg}deg)`;
}
setInterval(clockTicking, 1000);
