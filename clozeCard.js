// constructor for cloze cards

var fs = require('fs');

function ClozeCard(clozeDeletion, statement) {
	this.clozeDeletion = clozeDeletion;
	this.statement = statement;
};

ClozeCard.prototype.printInfo = function() {
	console.log("Cloze deletion: " + this.clozeDeletion + "\nStatement: " + this.statement);
};

module.exports = ClozeCard;