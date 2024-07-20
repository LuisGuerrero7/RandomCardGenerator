/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let listCardNumber = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let listCardSymbol = ["♦", "♥", "♠", "♣"];

window.onload = function() {
  function randomCardIndex(array) {
    const randomCardI = Math.floor(Math.random() * array.length);
    return array[randomCardI];
  }

  function generateCardNumber() {
    return randomCardIndex(listCardNumber);
  }

  function generateCardSymbol() {
    return randomCardIndex(listCardSymbol);
  }

  const cardNumber = generateCardNumber();
  const cardSymbol = generateCardSymbol();

  const cardNumberElement = document.getElementsByClassName("valor")[0];
  cardNumberElement.innerHTML = cardNumber;

  const cardSymbolElements = document.getElementsByClassName("pinta");
  for (let element of cardSymbolElements) {
    element.innerHTML = cardSymbol;
  }
};
