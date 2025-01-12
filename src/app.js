function cardGenerate() {
  let suits = ["♥", "♦", "♠", "♣"];
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  // Index random generator
  let indexSuits = Math.floor(Math.random() * suits.length);
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  // Rendering randomly suits and numbers
  document.querySelector("#top").innerHTML = suits[indexSuits];
  document.querySelector("#bottom").innerHTML = suits[indexSuits];
  document.querySelector("#number").innerHTML = numbers[indexNumbers];
  // Rendering suit color  
  let isRed = (suits[indexSuits] == "♦" || suits[indexSuits] == "♥");
  document.querySelector("#top").className = isRed ? "text-danger" : "text-dark";
  document.querySelector("#bottom").className = isRed ? "text-danger" : "text-dark";
  document.querySelector("#number").className = isRed ? "text-danger" : "text-dark";
}

window.onload = function () { 
  cardGenerate();
  // Button Card Generator
  document.querySelector("#btnNewCard").addEventListener("click", cardGenerate);
};

setInterval(cardGenerate, 1000);
