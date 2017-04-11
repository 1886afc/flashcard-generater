var inquirer = require("inquirer");
var fs = require('fs');
var BasicCard = require("./basicCard");
var ClozeCard = require("./clozeCard");

//variables
// holds value for card type that is made
var cardType = process.argv[2];
//holds number of questions to make
var numQs = parseFloat(process.argv[3])
//array that holds questions
var basicQuestions = [];
var clozeQuestions = [];



//functions
// create basic questions function
var bQuestions = function() {
		
	if(basicQuestions.length < 2) {
		inquirer.prompt([
			{
				name: "question",
				message: "What is the question on the front"
			}, {
				name: "answer",
				message: "what is the answer on the back",
			}

		]).then(function(answer){
			var newBasic = new BasicCard(answer.question, answer.answer);
			
			basicQuestions.push(newBasic)
			fs.appendFile('basicCard.txt', JSON.stringify(newBasic, null, 2) + "\n");
			//run basic question function again
			bQuestions();
		});
	} else {
		console.log(basicQuestions)
	}
};
//create cloze questions function
var cQuestions = function() {
		
	if(clozeQuestions.length < 2) {
		inquirer.prompt([
			{
				name: "fullText",
				message: "what is the question?"
			}, {
				name: "clozeDeletion",
				message: "part of question you would like to leave out",
			}, {
				name: "partialText",
				message: "question with deletion left out",
			}

		]).then(function(answer){
			var newCloze = new ClozeCard(answer.fullText, answer.clozeDeletion, answer.partialText);
			
			clozeQuestions.push(newCloze);
			fs.appendFile('clozeCard.txt', JSON.stringify(newCloze, null, 2) + "\n");
			//run basic question function again
			cQuestions();
		});
	} else {
		console.log(clozeQuestions)
	}
};

//getting the party started
if (cardType === "basic") {
	bQuestions();	   
	
}else if(cardType === "cloze") {
	cQuestions();
}else {
	console.log(" please input cloze or basic and number of questions");
};










	

	
