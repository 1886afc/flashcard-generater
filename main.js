var inquirer = require("inquirer");
var fs = require('fs');
var BasicCard = require("./basicCard");
var Cloze = require("./clozeCard");

//variables
// holds value for card type that is made
var cardType = process.argv[2];
//array that holds questions
var basicQuestions = [];
var clozeQuestions = [];

//functions
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







//pompt telling user to choose cloze or basic if none is chosen
// if (cardType === undefined) {
// 	console.log("Please choose either basic or cloze")
// }
if (cardType === "basic") {
	bQuestions()	   
	
}else {
	console.log("input cloze or basic");
};


	

	
