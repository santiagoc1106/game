var dealerSum = 0;
var yourSum = 0;

//keeps track of aces in deck
var dealerAceCount= 0;
var yourAceCount = 0;

var hidden;
var deck;

var canHit = true; //allows you to hit while your sum is <=21

//when window loads
window.onload = function() {
  
  buildDeck();
  shuffleDeck();
  startGame();
}

function buildDeck() {
 let values = ["a", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k"];
 let types = ["s", "c", "d", "h"];
  var deck = [];
  for (let i = 0; i < types.length; i++){
  for (let j = 0; j < values.length; j++){
      deck.push(values[j] + types[i]); //as --> ks; start loop again
  }
    }
  
}

function shuffleDeck(){
for (let i = 0; i< deck.length; i++)
{
 let j= Math.floor( Math.random() * deck.length);
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
} 
  console.log(deck);
}

function startGame(){
  hidden = deck.pop();
  dealerSum += getValue(hidden);
  dealerAceCount += checkAce
  while (dealerSum < 17){
  let cardImg = document.createElement("img");
  let card = deck.pop();
    cardImg.src = "./cards/" + card + ".gif";
    dealerSum += getValue(card);
    dealerAceCount += checkAce(card);
    document.getElementById("dealer-cards").append(cardImg);
  }
  
}

function getValue(card){
  let data = card.split("-");
  let value = data[0];

  if(isNaN(value)){
    if (value == "A"){
        return 11;
  }
    return 10;
}
return parseInt(value);
}

function checkAce(card){
 if (card[0] == "A"){
  return 1;
 }
  return 0;
}
