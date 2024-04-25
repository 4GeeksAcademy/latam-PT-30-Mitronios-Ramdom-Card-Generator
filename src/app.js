/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const randomSuit = generateRandomSuit();
  const card = document.querySelector("#card");
  if (randomSuit == "♠️" || randomSuit == "♣️") {
    card.classList.replace("text-danger", "text-dark");
  }
  document.querySelector("#topSuit").innerHTML = randomSuit;
  document.querySelector("#number").innerHTML = generateCardNumber();
  document.querySelector("#bottomSuit").innerHTML = randomSuit;
};

const generateCardNumber = () => {
  const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  return randomNumber;
};

const generateRandomSuit = () => {
  const suits = ["♦️", "♥️", "♠️", "♣️"];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  return randomSuit;
};
