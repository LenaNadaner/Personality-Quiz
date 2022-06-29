/*Add your JavaScript here*/

var michaelScore = 0;
var jimScore = 0

var questionCount = 0;

var result = document.getElementById("result");
var q1a1 = document.getElementById('q1a1');

var q1a2 = document.getElementById ('q1a2');

var q2a1 = document.getElementById ('q2a1');

var q2a2 = document.getElementById ('q2a2');

var q3a1 = document.getElementById ('q3a1');

var q3a2 = document.getElementById ('q3a2');

q1a1.addEventListener("click", michael);

q1a2.addEventListener("click", jim);

q2a1.addEventListener("click", jim);
q2a2.addEventListener("click", michael);

q3a1.addEventListener("click", jim);

q3a2.addEventListener("click", michael);

function michael () {
  michaelScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "michaelScore = " + michaelScore);

  if (questionCount ==3){
  console.log("The quiz is done!")
    updateResult();
  }
}

function jim() {
  jimScore += 1;
  questionCount += 1;

  console.log("questionCount =" + questionCount + "\t" + "jimScore =" + jimScore);

if (questionCount ==3){
  console.log("The quiz is done!")
  updateResult();
}

}
  

function updateResult(){
 if (michaelScore >= 2){
   result.innerHTML = "You are Michael Scott!";
  console.log("You are Michael Scott!");
} else if (jimScore >= 2){
   result.innerHTML = "You are Jim Halpert!";
  console.log("You are Jim Halpert!"); 
}

}