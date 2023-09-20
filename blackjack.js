var dealerSum = 0;
var playerSum = 0;

//keeps track of aces in deck
var dealerAceCount= 0;
var playerAceCount = 0;

var hidden;
var deck;

var canHit = true; //allows you to hit while your sum is <=21

//when window loads
window.onload = function() {
  buildDeck();
  shuffleDeck();
  startGame();
  reduceAce(playerSum, playerAceCount);
}

//Build the deck
function buildDeck() {
 let values = ["a", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k"];
 let types = ["s", "c", "d", "h"];
  deck = [];
  for (let i = 0; i < types.length; i++){
  for (let j = 0; j < values.length; j++){
      deck.push(values[j] + "-" + types[i]); //a-s --> k-s; start loop again
  }
    }

}

//Shuffle the deck
function shuffleDeck(){
for (let i = 0; i< deck.length; i++){
 let j= Math.floor(Math.random() * deck.length);
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
} 
  console.log(deck);
}
//When the game starts
function startGame(){
  hidden = deck.pop();
  dealerSum += getValue(hidden);
  dealerAceCount += checkAce(hidden)
  //Give dealer cards
  while (dealerSum < 17){
  let cardImg = document.createElement("img"); //<img src = "./card/4c.gif"
  let card = deck.pop();
    cardImg.src = "./PNG-cards-1.3/" + card + ".png";
    dealerSum += getValue(card);
    dealerAceCount += checkAce(card);
    document.getElementById("dealer-cards").append(cardImg);
    reduceAce(playerSum, playerAceCount);
  }
  console.log(dealerSum);
//Give player cards
for (let i = 0; i < 2; i++){
  let cardImg = document.createElement("img"); //<img src = "./card/4c"
  let card = deck.pop();
    cardImg.src = "./PNG-cards-1.3/" + card + ".png";
    playerSum += getValue(card);
    playerAceCount += checkAce(card);
    document.getElementById("player-cards").append(cardImg);
    reduceAce(playerSum, playerAceCount);
  }
  document.getElementById("hit").addEventListener("click", hit);
  document.getElementById("stay").addEventListener("click", stay);
  document.getElementById("refresh").addEventListener("click", playAgain);
  document.getElementById("player-sum").innerText = playerSum;
}
//Hit
function hit (){
  if(!canHit){
      return;
}
  
  let cardImg = document.createElement("img");
  let card = deck.pop();
    cardImg.src = "./PNG-cards-1.3/" + card + ".png";
    playerSum += getValue(card);
    playerAceCount += checkAce(card);
    document.getElementById("player-cards").append(cardImg);
    document.getElementById("player-sum").innerText = playerSum;

  if(reduceAce(playerSum, playerAceCount) > 21){
    canHit = false;
  
  }
    
}
//Stay
function stay(){
  dealerSum = reduceAce(dealerSum, dealerAceCount);
  yourSum = reduceAce(playerSum, playerAceCount);

  canHit = false;
  document.getElementById("hidden").src = "./PNG-cards-1.3/" + hidden + ".png";

  let message = ""
  
  if(playerSum > 21){
    message = "Loser!"
  }
  else if (dealerSum > 21){
    message = "Winner!"
  }
  //both have sum <21
  else if (playerSum == dealerSum){
    message = "Uh oh! Tie!"
  }
  else if (playerSum > dealerSum){
    message = "Winner!"
  }
  else if (playerSum < dealerSum){
    message = "Loser!"
  }
  document.getElementById("dealer-sum").innerText = dealerSum;
  document.getElementById("player-sum").innerText = playerSum;
  document.getElementById("results").innerText = message;
  
}
//Play Again
function playAgain(){
    location.reload(true);
}
//How to get the value of the card
function getValue(card){
  let data = card.split("-"); //4-c --> [4, c]
  let value = data[0];

  if(isNaN(value)){// a j q k
    if (value == "a"){
        return 11;
  }
    return 10;
}
return parseInt(value);
}
//Check if there are aces in hand
function checkAce(card){
 
 if (card[0] == "a"){
  return 1;
 }
  return 0;
}
//If you have an ace and your total >21, change ace val from 11-->1
function reduceAce(playerSum, playerAceCount) {
  console.log(playerSum)
  console.log(playerAceCount)
  while(playerSum > 21 && playerAceCount > 0) {
    playerSum -= 10;
    playerAceCount -= 1;
  }
  return playerSum;
}


