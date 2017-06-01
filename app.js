function populate(){

	if(quiz.isEnded()){
		showScores();
	}else{
		var el = document.getElementById("question");
			el.innerHTML = quiz.getQuestionIndex().text;

		var choices = quiz.getQuestionIndex().choices;

			for(var i=0; i<choices.length; i++){
				var elem = document.getElementById("choice"+ i);
				elem.innerHTML = choices[i];
				guess("btn" + i, choices[i]);
			}	

			showProgress();
	}

}

function showProgress(){
	var element = document.getElementById("progress");
	var currentQuestionNumber = quiz.questionIndex + 1;

	element.innerHTML = "Question No." + currentQuestionNumber + " of " + quiz.questions.length;
}

function guess(id, guess){

	var button = document.getElementById(id);

 		button.onclick = function(){
 			quiz.guess(guess);
			populate();
 		}

}

function showScores(){
	
	var gameOverHtml = "<h1>Results</h1><br /><h2 id='score'> Your Scores : " + quiz.score + "</h2>";

	var bodyEl = document.getElementById("quiz");
	bodyEl.innerHTML = gameOverHtml;
}


var questions = [
	new Question("Which of the following is not object oriented ?", ["Java", "C", "C++", "PYTHON"], "C"),
	new Question("Which company does ps4 belongs to ?", ["Samsung", "SONY", "Xbox", "BlackBerry"], "SONY"),
	new Question("Paul Pogba is presently in which club ?", ["Real Madrid", "Barcelona", "Athletico Madrid", "Juventus"], "Juventus"),
	new Question("WHICH OF THE FOLLOWING IS A PRIME NO.", ["A", "B", "C", "D"], "A"),
	
];

var quiz = new Quiz(questions);


populate();