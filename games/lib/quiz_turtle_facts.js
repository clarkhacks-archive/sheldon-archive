document.write("<div id=\"quiz\" class=\"panel panel-primary\"><div class=\"panel-body ind \"><h4 class=\"cour\">Asking question <span id=\"NumberAsked\">1<\/span> of 10 with <span id=\"NumberCorrect\">0<\/span> answers correct<\/p><\/h4><p><span id=\"TriviaQuestion\">???<\/span><\/p><p><input id=\"RadioTrue\" type=\"radio\" value=\"true\" name=\"answer\" checked=\"checked\"><\/input> True  <input id=\"RadioFalse\" type=\"radio\" value=\"false\" name=\"answer\"><\/input> False  <input style=\"margin-left: 5px\" id=\"ButtonContinue\" class=\"btn btn-info\" onclick=\"checkAnswer();\" type=\"button\" value=\"continue\"><\/input><\/p><\/div><\/div>");
console.log('Original Trivia Code Was Modified By Clark Weckmann, Founder Of Sheldontheturtle.com')
    // Array of trivia data
    var TriviaData = new Array(10)
    createTwoDimensionalArray(3);

    // Variables to track state of the game
    // i.e. number questions asked, current correct total and current question
    var questionsAsked = 0;
    var totalCorrect = 0;
    var currentQuestion = 0;
    var selectionValid = false;

    // Questions
    TriviaData[0][0] = "A box turtle has hinge on the bottom of its shell.";
    TriviaData[1][0] = "The average lifespan of a box turtle is 20 years.";
    TriviaData[2][0] = "Box turtles are carnivores.";
    TriviaData[3][0] = "Some box turtles are shipped to Asia for the food market.";
    TriviaData[4][0] = "Male box turtles are larger than females on average.";
    TriviaData[5][0] = "A tortoise is a turtle but a turtle is not a tortoise.";
    TriviaData[6][0] = "A group of tortoises is called a creep.";
    TriviaData[7][0] = "Turtles can't feel touch on their shell.";
    TriviaData[8][0] = "Turtles live on every continent except Antarctica.";
    TriviaData[9][0] = "Tortoises dig burrows.";

    // Answers
    TriviaData[0][1] = "true";
    TriviaData[1][1] = "false";
    TriviaData[2][1] = "false";
    TriviaData[3][1] = "true";
    TriviaData[4][1] = "false";
    TriviaData[5][1] = "true";
    TriviaData[6][1] = "true";
    TriviaData[7][1] = "false";
    TriviaData[8][1] = "true";
    TriviaData[9][1] = "true";

    // Has question been asked
    // -- necessary because we are asking in random order
    TriviaData[0][2] = "no";
    TriviaData[1][2] = "no";
    TriviaData[2][2] = "no";
    TriviaData[3][2] = "no";
    TriviaData[4][2] = "no";
    TriviaData[5][2] = "no";
    TriviaData[6][2] = "no";
    TriviaData[7][2] = "no";
    TriviaData[8][2] = "no";
    TriviaData[9][2] = "no";

    // Load up first question
    setQuestion();

    // Sets question text and indicator so that we know the question has been displayed
    function setQuestion() {
        selectionValid = false; // Flag to make sure question has not been asked yet
        while (selectionValid == false) {
            currentQuestion = Math.floor(Math.random() * 10); // randomly select starting question
            if (TriviaData[currentQuestion][2] == "no") {
                selectionValid = true;
            }
        }
        document.getElementById("TriviaQuestion").innerHTML = TriviaData[currentQuestion][0];
        TriviaData[currentQuestion][2] = "yes";
        questionsAsked = questionsAsked + 1;
    }

    function processAnswer(myAnswer) {
        if (TriviaData[currentQuestion][1] == myAnswer) {
            // answer correct
            totalCorrect = totalCorrect + 1;
        }
    }

    // This function creates our two dimensional array
    function createTwoDimensionalArray(arraySize) {
        for (i = 0; i < TriviaData.length; ++i)
            TriviaData[i] = new Array(arraySize);
    }

    // This function checks the answer, updates correct total
    // and randomly selects the next question
    function checkAnswer() {
        if (document.getElementById("RadioTrue").checked) {
            processAnswer("true");
        }
        else {
            processAnswer("false");
        }
        // get next question if not asked all yet
        if (questionsAsked < 10) {
            setQuestion();
        }
        // final question asked - disable button and show final results
        else {
            alert("Turtle Quiz Complete! You got " + totalCorrect + " correct out of 10.");
            document.getElementById("ButtonContinue").disabled = true;
            // document.getElementById("quiz").innerHTML = ("")
            window.open('../lib/quiz_ans.html');
        }
        // update totals
        document.getElementById("NumberAsked").innerHTML = questionsAsked;
        document.getElementById("NumberCorrect").innerHTML = totalCorrect;
    }
