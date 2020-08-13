// Question Constructor

function Question(text, choices, answer){
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice){
	return choice ===  this.answer;  // returns true
};

// var utk = new Question("hello", "a", "a");
// alert(utk.correctAnswer("a"));