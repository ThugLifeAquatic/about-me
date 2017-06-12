//A simple quiz that asks the user Y/N questions and keeps score.
//Final Code
'use strict';
alert('Welcome! Let\'s play a guessing game!');
alert('You\'ll be answering questions about me, Austin Cohrs');
var name = prompt('What should I call you?');
console.log('Users name is ' + name + '.');

// //Keeps score
var score = 0;
var targetNum = Math.floor(Math.random() * (11 - 1)) + 1;
console.log('targetNum is ' + targetNum + '.');

//Question 1-5, y/n
alert('Let\'s get started, ' + name + '! Answer yes or no to the following questions.');

function yesNO() {

  //Congrats Messages
  var congrats0 = 'Your right! Gravity has an unusually strong hold on me';
  var congrats1 = 'Yep! Her name is princess Leia.';
  var congrats2 = 'Correct. I am from Kansas.';
  var congrats3 = 'Her name is Chelsea, and she\'s a photographer.';
  var congrats4 = 'A fellow geek!';

  //shame messages
  var fail0 = 'WRONG! Gravity has an unusually strong hold on me';
  var fail1 = 'WRONG! Her name is Princess Leia.';
  var fail2 = 'WRONG! I am from Kansas.';
  var fail3 = 'WRONG! Her name is Chelsea and she\'s a photographer.';
  var fail4 = 'Get out.';

  var questions = ['Can I dunk a basketball?', 'Do I have a cat?', 'Am I from Seattle?', 'Am I married?', 'Is Gandalf a jedi?'];
  var answers = [
    ['no', 'n'],
    ['yes', 'y'],
    ['no', 'n'],
    ['yes', 'y'],
    ['no', 'n']
  ];
  var wrong = [
    ['yes', 'y'],
    ['no', 'n'],
    ['yes', 'y'],
    ['no', 'n'],
    ['yes', 'y']
  ];
  var correct = [congrats0, congrats1, congrats2, congrats3, congrats4];
  var incorrect = [fail0, fail1, fail2, fail3, fail4];
  //ilegal charater
  var notlegal = 'That doesn\'t compute...you\'re under arrest! Psych. Please answer "yes", "no", or "y","n"';
  for (var i = 0; i < 5; i++) {
    console.log(answers);
    console.log(correct);
    var response = prompt(questions[i]);
    if (answers[i].includes(response)) {
      console.log(answers[i].includes(response));
      alert(correct[i]);
      score++;
    } else if (wrong[i].includes(response)) {
      alert(incorrect[i]);
    } else {
      alert(notlegal);
    }
  }
}
yesNO();

//Question 6, # game.
function q6() {
  var trys = 1;
  for (var i = 4; i > 0; i--) {
    var tried = '.';
    if (i < 4) {
      tried = ' left.';
    }
    var guessNum = prompt('Guess a number between 1 and 10.  You have ' + i + ' tries' + tried);
    if (guessNum == targetNum) {
      alert('Nailed it! You got it on try # ' + trys + '.');
      console.log('User guessed correctly');
      score++;
      break;
    } else if (guessNum > targetNum && i > 1) {
      alert('WRONG! Guess lower.');
      console.log('User guessed too high. Guess: ' + guessNum + '.');
      trys++;
    } else if (guessNum < targetNum && i > 1) {
      alert('WRONG! Guess higher.');
      console.log('User guessed too low. Guess: ' + guessNum + '.');
      trys++;
    } else if (i > 1) {
      alert('Thats not a number dummy.');
      console.log('User entered an illegal guess: ' + guessNum + '.');
      trys++;
    } else {
      alert('You\'re out of guesses. The # was ' + targetNum + '.');
      console.log('User is out of guesses. Last Guess: ' + guessNum + '.');
    }
  }
}
q6();

//Question 7, word game.
function q7() {
  var petAnimals = ['lizard', 'goat', 'octopus', 'horse', 'chicken'];
  var hints = ['1 is a reptile!', '1 is a cephalapod!', '1 is a horse, like literally...that\'s an answer.', '1 is a farm bird!', '1 has split hooves!', '3 are farm animals!'];
  var trys = 1;

  for (var i = 6; i > 0; i--) {
    var guessPet = prompt('Guess a pet I\'ve owned other than a cat or dog.');
    console.log(hints[i]);
    if (petAnimals.indexOf(guessPet.trim().toLowerCase()) >= 0) {
      alert('Nailed it! You got one on try # ' + trys + '. Correct answers include: lizard, goat, octopus, horse, and chicken');
      console.log('User guessed correctly.');
      score++;
      break;
    } else if (i > 1) {
      alert('Wrong! You have ' + i + ' tries left. Hint: ' + hints[i - 1]);
      console.log('User guessed incorrectly. Guess: ' + guessPet + '.');
      trys++;
    } else {
      alert('You\'re out of guesses. Correct answers include: lizard, goat, octopus, horse, and chicken');
      console.log('User is out of guesses. Last guess: ' + guessPet + '.');
    }
  }
}
q7();

//Results
alert('You got ' + score + ' out of 7 Correct.');
if (score >= 5) {
  alert('You know you me pretty well, ' + name + '.');
  console.log('User wins. User score is ' + score + '.');
} else {
  alert('You don\'t know jack.');
  console.log('User loses. User score is ' + score + '.');
}
