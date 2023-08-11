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
}

fucntion buildDeck() {
 let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
 let types = ["S", "C", "D", "H"];
  deck = [];
  for (let i = 0; i < types.length; i++){
  for (let j = 0; j <values.length; j++){
      deck.push(values[j]+ "-" + types[i]); //ace of (wtv) --> king of (wtv); start loop again
  }
    }
  console.log(deck);
}
