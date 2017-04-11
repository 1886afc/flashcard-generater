// constructor for cloze cards

var fs = require('fs');

function ClozeCard(fullText, clozeDeletion, partialText) {
	this.fullText = fullText;
	this.clozeDeletion = clozeDeletion;
	this.partialText = partialText;
};

ClozeCard.prototype.printInfo = function() {
	console.log("full text " + this.fullText + "\nCloze deletion: " + this.clozeDeletion + "\npartialText: " + this.partialText);
};

module.exports = ClozeCard;