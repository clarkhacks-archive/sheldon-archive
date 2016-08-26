// scripts here:

	function submitQuiz() {
		console.log('submitted');

	// get each answer score
		function answerScore (qName) {
			var radiosNo = document.getElementsByName(qName);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked) {
			// do something with radiosNo
					var answerValue = Number(radiosNo[i].value);
				}
			}
			// change NaNs to zero
			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;
		}

	// calc score with answerScore function
		var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));
		console.log("CalcScore: " + calcScore); // it works!

	// function to return correct answer string
		function correctAnswer (correctStringNo, qNumber) {
			console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
			return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
				(document.getElementById(correctStringNo).innerHTML) + "</strong>");
			}

	// print correct answers only if wrong (calls correctAnswer function)
		if (answerScore('q1') === 0) {
			document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
		}
		if (answerScore('q2') === 0) {
			document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
		}
		if (answerScore('q3') === 0) {
			document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
		}
		if (answerScore('q4') === 0) {
			document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
		}

	// calculate "possible score" integer
		var questionCountArray = document.getElementsByClassName('question');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

	// show score as "score/possible score"
		var showScore = "Your Score: " + calcScore +"/" + questionCounter;
	// if 4/4, "perfect score!"
		if (calcScore === questionCounter) {
			showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
		};
		document.getElementById('userScore').innerHTML = showScore;
	}

$(document).ready(function() {

	$('#submitButton').click(function() {
		$(this).addClass('hide');
	});

});
document.write("<article class=\"panel panel-primary\"> <div class=\"panel-heading\"> <h2 class=\"quizHeader\">Sheldon<\/h2> <\/div> <div class=\"panel-body cour\"> <div style=\"\"> <div> <div> <div> <p class=\"question\">1. Favorite Food<\/p> <div> <input class=\"answer\" type=\"radio\" name=\"q1\" value=\"1\"> <label id=\"correctString1\">Grapes<\/label> <br> <input class=\"answer\" type=\"radio\" name=\"q1\" value=\"0\"> <label>Tomatoes<\/label> <br> <input class=\"answer\" type=\"radio\" name=\"q1\" value=\"0\"> <label>Pears<\/label> <br> <input class=\"answer\" type=\"radio\" name=\"q1\" value=\"0\"> <label>Apples<\/label> <\/div> <\/div> <\/div> <div> <div> <p class=\"question\">2. Favorite Activity<\/p> <div> <input class=\"answer\" type=\"radio\" name=\"q2\" value=\"0\"> <label>Eating<\/label> <br> <input class=\"answer\" type=\"radio\" name=\"q2\" value=\"1\"> <label id=\"correctString2\">Walking in circles<\/label> <br> <input class=\"answer\" type=\"radio\" name=\"q2\" value=\"0\"> <label>Cuddles<\/label> <br> <input class=\"answer\" type=\"radio\" name=\"q2\" value=\"0\"> <label>Sleeping<\/label> <\/div> <\/div> <\/div> <\/div> <div> <div> <div> <p class=\"question\">3. Naming Day<\/p> <div> <input class=\"answer\" type=\"radio\" name=\"q3\" value=\"0\"> <label>May 6th<\/label> <br> <input class=\"answer\" type=\"radio\" name=\"q3\" value=\"1\"> <label id=\"correctString3\">May 7th<\/label> <br> <input class=\"answer\" type=\"radio\" name=\"q3\" value=\"0\"> <label>March 7th<\/label> <br> <input class=\"answer\" type=\"radio\" name=\"q3\" value=\"0\"> <label>March 6th<\/label> <\/div> <\/div> <\/div> <div> <div> <p class=\"question\">4. He is a:<\/p> <div> <input class=\"answer\" type=\"radio\" name=\"q4\" value=\"0\"> <label>Tortoise<\/label> <br> <input class=\"answer\" type=\"radio\" name=\"q4\" value=\"1\"> <label id=\"correctString4\">Box Turtle<\/label> <br> <input class=\"answer\" type=\"radio\" name=\"q4\" value=\"0\"> <label>Slider<\/label> <br> <input class=\"answer\" type=\"radio\" name=\"q4\" value=\"0\"> <label>Sea Turtle<\/label> <\/div> <\/div> <\/div> <\/div> <\/div> <br> <div class=\"submitter\"> <input class=\"btn btn-info quizSubmit\" id=\"submitButton\" onclick=\"submitQuiz()\" type=\"submit\" value=\"Submit\"> <\/div> <!--show only wrong answers on submit--> <div class=\"quizAnswers\" id=\"correctAnswer1\"><\/div> <div class=\"quizAnswers\" id=\"correctAnswer2\"><\/div> <div class=\"quizAnswers\" id=\"correctAnswer3\"><\/div> <div class=\"quizAnswers\" id=\"correctAnswer4\"><\/div> <!--show score upon submit--> <div> <h2 class=\"quizScore\" id=\"userScore\"><\/h2> <\/div> <\/div><\/article>");
