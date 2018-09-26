// BUSINESS LOGIC:
function check() {

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var question9 = document.quiz.question9.value;
var question10 = document.quiz.question10.value;
var correct = 0

if (question1 == "false"){
  correct++;.0
}
if (question2 == "function myFunction()") {
  correct++;
}
if (question3 == "emcascript") {
  correct++;
}
if (question4 == "myFunction()") {
  correct++;
}
if (question5 == "if (i == 5)") {
  correct++;
}
if (question6 == "if (i != 5)") {
  correct++;
}
if (question7 == ".js") {
  correct++;
}
if (question8 == "script tag") {
  correct++;
}
if (question9 == "true") {
  correct++;
}
if (question10 == "false") {
  correct++;
}

var percentage = ["100%", "90%", "80%", "70%", "60%", "50%", "40%", "30%", "20%", "10%", "0%"];
var score;
if(correct < 1){
  score = [10];
} else if (correct > 0 && correct<10){
  score = [9];
} else if (correct > 0 && correct < 9) {
  score = [8];
} else if (correct > 0 && correct < 8) {
  score = [7];
} else if (correct > 0 && correct < 7) {
  score = [6];
} else if (correct > 0 && correct < 6) {
  score = [5];
} else if (correct > 0 && correct < 5) {
  score = [4];
} else if (correct > 0 && correct < 4) {
  score = [3];
} else if (correct > 0 && correct < 3) {
  score = [2];
} else if (correct > 0 && correct < 2) {
  score = [1];
} else {
  score = [0];
}
document.getElementById("score_reveal").style.visibility = "visible"
document.getElementById("number_correct").innerHTML = "Your score is" + " " +  correct;
document.getElementById("percentage").innerHTML = percentage[score];
}