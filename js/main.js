var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",

},
];
var cardsInPlay = [];

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};

//finds all elements with .played class and then cycles through to give back image
var resetPlayed = function() {
	var playedElements = document.querySelectorAll('.played');
	for (var i=0; i < playedElements.length; i++) {
		playedElements[i].setAttribute('src', 'images/back.png');
	};
};

var saveMatches = function() {
	var matchedCards = document.querySelectorAll('.played');
	for (var i=0; i < matchedCards.length; i++) {
		matchedCards[i].className += 'matched';
	}
}

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
//setTimeout delays the alert so the second card can load
		setTimeout(function(){alert("You found a match!"); saveMatches();}, 300)}
	else {
		setTimeout(function(){alert("Sorry, try again.");
		resetPlayed();}, 300);
	};

};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute('src',cards[cardId].cardImage);
	//Hopefully adds "played" class to each card clicked
	this.className += ' played';

	if (cardsInPlay.length === 2) {
		checkForMatch();
		cardsInPlay = [];
	};
};




createBoard();

