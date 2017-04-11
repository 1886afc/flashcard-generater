// constructor for basic flashcards

var fs = require( 'fs');

function BasicCard(frontQuestion, backAnswer) {
	this.frontQuestion = frontQuestion;
	this.backAnswer = backAnswer;
}

BasicCard.prototype.printInfo = function() {
	console.log("question on the front: " + this.frontQuestion + "\nanswer on the back: " + this.backAnswer);
};

//testing 
// var one = new BasicCard("what is your name?", "Duke");
// one.printInfo();

module.exports = BasicCard;
