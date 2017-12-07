function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else{
        //show question
        var element = document.getElementById("question"); 
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i , choices [i]);
        }

        showProgress();
    }
};

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;

}

function showScores(){
    var gameOverHtml = "<h1>Result</h1>";

    if(quiz.score == 0){
        gameOverHtml += "<h2 id='score'>Your Score was: " + quiz.score + "/" +quiz.questions.length + "<br><br>Not one question right? Are you kidding me!</h2>";
    }
    else{
        gameOverHtml += "<h2 id='score'>Your Score was: " + quiz.score + "<br><br>Wow! You really know a lot about Canada!</h2>";
    }
   
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};

var questions = [
    new Question("What is Canada's largest city by population?",["Montreal","Vancouver","Toronto","Calgary"],"Toronto"),
    new Question("In what year did Confederation happen?",["1937","1867","1875","1942"],"1867"),
    new Question("What is Canad's smallest province by area?",["PEI","New Brunswick","Nova Scotia","Newfoundland"],"PEI")
];

var quiz = new Quiz(questions);

populate();

