import DonutCounter from "./DonutCounter.js";

//varibles selecting html elements
const makeNewDonutBtn = document.querySelector(".makeNewDonutBtn");
const autoClickerBtn = document.querySelector(".autoClicker");
const buyMultiplierBtn = document.querySelector(".buyMultiplier");
const donutCounterEl = document.querySelector(".donutCounter");
const autoClickerEl = document.querySelector(".autoClickerCounter");
const multiplierCounterEl = document.querySelector(".multiplierCounter");
const resetBtn = document.querySelector(".reset");
let donut = new DonutCounter();
let autoClickerCounter = 0;
let multiplierCounter = 0;


//FIRST BUTTON V1
makeNewDonutBtn.addEventListener("click", makeFirstDonut);
function makeFirstDonut() {
  donutCounterEl.innerText = donut.donutCount;
  makeNewDonutBtn.removeEventListener("click", makeFirstDonut);
  makeNewDonutBtn.addEventListener("click", makeNewDonuts);
}

function makeNewDonuts() {
  donut.addOneDonut();
  console.log("Donuts: " + donut.donutCount);
  donutCounterEl.innerText = "Donuts: " + donut.donutCount.toFixed(4);
}

//AUTO-CLICKER BUTTON
autoClickerBtn.addEventListener("click", buyAutoClicker);
function buyAutoClicker() {
  if (donut.donutCount >= donut.autoClickPrice) {;
    donut.buyAutoClicker();
    donutCounterEl.innerText = "Donuts: " + donut.donutCount.toFixed(4);
    setInterval(makeNewDonuts, 1000);
    autoClickerBtn.innerText = "Auto-Clicker (-" + donut.autoClickPrice + ")";
    autoClickerCounter += 1;
    autoClickerEl.innerText = "Auto-Clickers active: " + autoClickerCounter;
  }
}

//MULTIPLIER BUTTON
buyMultiplierBtn.addEventListener("click", buyMultiplier);
function buyMultiplier() {
  if (donut.donutCount >= donut.multiplierPrice) {
    donut.buyMultiplier();
    buyMultiplierBtn.innerText = "Multiplier (-" + donut.multiplierPrice + ")";
    donutCounterEl.innerText = "Donuts: " + donut.donutCount.toFixed(4);
    multiplierCounter += 1;
    multiplierCounterEl.innerText =
      "Multiplier: " +
      donut.multiplier.toFixed(4) +
      " Multipliers active: " +
      multiplierCounter;
  }
}

// RESET button
resetBtn.addEventListener("click", resetGame);
function resetGame() {
  //Sorry Rickie, I tried :(
  location.reload();


  // for(let i = 0; i <= autoClickerCounter; i++) {
  //   window.clearInterval(i);
  // }
  // donut.reset();
  // autoClickerCounter = 0;
  // multiplierCounter = 0;
  
}
