var readLineSync = require('readline-sync');
var userAnswer = readLineSync.question("What's your name?")
var welcomeMessage = "Welcome " + userAnswer + " to do you know NYC?"
console.log(welcomeMessage);

var score = 0

function game(question, answer) {
  var userAnswer = readLineSync.question(question)

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("You are right!")
    score = score + 1;
    console.log("Your score is:" + score);
    console.log("---------");
  } else {
    console.log("You are wrong!");
    score = score - 1;
    console.log("Your score is:" + score);
    console.log("---------");
  }
}


var questions = [
  {
    question : `What is the nickname of New York City?

a) The Big Apple 
b) The Windy City
c) The City of Angels 
d) The Emerald City \n`, 
    
    answer: "a"
},


{
  question :  `Which famous statue stands on Liberty Island in New York Harbor?
a) Mount Rushmore
b) The Statue of Liberty
c) The Lincoln Memorial
d) The Washington Monument \n`,

    answer: "b"   
},

{
  question : `What is the name of the famous skyscraper located in Lower Manhattan?
  
a) Empire State Building
b) Burj Khalifa
c) Taipei 101
d) The Shard \n`,

    answer: "a"
},

{
  question : `Which famous Central Park landmark is often referred to as the "heart of the park"?
a) The Great Lawn
b) Bethesda Terrace
c) The Mall
d) The Pond \n`,

    answer:  "b"
},

{
  question : `Which famous New York City street is known for its high-end fashion stores?
a) Fifth Avenue
b) Rodeo Drive
c) Oxford Street
d) Avenue des Champs-Élysées \n`,

    answer: "a"   
  
}
];

for (var i=0; i< questions.length; i++) {
  var currentQuestion = questions[i];
  game(currentQuestion.question, currentQuestion.answer)
  
}

console.log("Nice Job! You are a true newyorker! Your score is:" + score)
