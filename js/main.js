console.log("All systems are go!")

var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];
var cardsInPlay = [];

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
	this.setAttribute('src', cards[cardId].cardImage);
};

var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

var checkForMatch = function(){
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("That's a match!");
		} else {
			alert('Sorry, try again.');
		}
	}
};

function reset(){
  cardsInPlay = []; 
  cardElements = document.getElementById('game-board').children; 
  for (var i = 0; i < cardElements.length; ++i) {
      cardElements[i].setAttribute('src', 'images/back.png');
  }
};

var button = document.querySelector('button');
button.addEventListener('click', reset);

createBoard();

