//A simple quiz that asks the user Y/N questions and keeps score.
'use strict';
alert('Welcome! Let\'s play a guessing game!');
alert('You\'ll be answering questions about me, Austin Cohrs');
var name = prompt('What should I call you?');
console.log('Users name is ' + name + '.')

// //Keeps score
var score = 0;
var correct = false;
var isLegal;
var targetNum = Math.floor(Math.random() * (11 - 1)) + 1;
console.log('targetNum is ' + targetNum + '.');

//Question 1-5, y/n
alert('Let\'s get started, ' + name + '! Answer yes or no to the following questions.');
isLegal = false;
while (isLegal === false) {
  var canDunk = prompt('Can I dunk a basketball').toLowerCase();
  if (canDunk === 'no' || canDunk === 'n') {
    alert('Your right! Gravity has an unusually strong hold on me');
    score++;
    isLegal = true;
    console.log('Question 1 answered correctly. User score is ' + score + '.');
  } else if (canDunk === 'yes' || canDunk === 'y') {
    alert('WRONG! Gravity has an unusually strong hold on me');
    console.log('Question 1 WRONG. User score is ' + score + '.');
    isLegal = true;
  } else {
    alert('That doesn\'t compute...you\'re under arrest! Psych. Please answer "yes", "no", or "y","n"')
    console.log('User entered an illegal response.')
  }
}

var hasCat = prompt('Do I have a cat?').toLowerCase();
if (hasCat === 'yes' || hasCat === 'y') {
  alert('Yep! Her name is princess Leia.');
  score++;
  console.log('Question 2 answered correctly. User score is ' + score + '.');
} else if (hasCat === 'no' || hasCat === 'n') {
  alert('WRONG! Her name is Princess Leia.');
  console.log('Question 2 WRONG. User score is ' + score + '.');
} else {
  alert('That doesn\'t compute...you\'re under arrest! Psych. Please answer "yes", "no", or "y","n"')
  console.log('User entered an illegal response.')
}
var fromWhere = prompt('Am I from Seattle?').toLowerCase();
if (fromWhere === 'no' || fromWhere === 'n') {
  alert('Correct. I am from Kansas.');
  score++;
  console.log('Question 3 answered correctly. User score is ' + score + '.');
} else if (fromWhere === 'yes' || fromWhere === 'y') {
  alert('WRONG! I am from Kansas.');
  console.log('Question 3 WRONG. User score is ' + score + '.');
} else {
  alert('That doesn\'t compute...you\'re under arrest! Psych. Please answer "yes", "no", or "y","n"')
  console.log('User entered an illegal response.')
}
var isMarried = prompt('Am I married?').toLowerCase();
if (isMarried === 'yes' || isMarried === 'y') {
  alert('Her name is Chelsea, and she\'s a photographer.');
  score++;
  console.log('Question 4 answered correctly. User score is ' + score + '.');
} else if (isMarried === 'no' || isMarried === 'n') {
  alert('WRONG! Her name is Chelsea and she\'s a photographer.');
  console.log('Question 4 WRONG. User score is ' + score + '.');
} else {
  alert('That doesn\'t compute...you\'re under arrest! Psych. Please answer "yes", "no", or "y","n"')
  console.log('User entered an illegal response.')
}
var gandalfJedi = prompt('Is Gandalf a jedi?').toLowerCase();
if (gandalfJedi === 'no' || gandalfJedi === 'n') {
  alert('A fellow geek!');
  score++;
  console.log('Question 5 answered correctly. User score is ' + score + '.');
} else if (gandalfJedi === 'yes' || gandalfJedi === 'y') {
  alert('Get out.');
  console.log('Question 5 WRONG. User score is ' + score + '.');
} else {
  alert('That doesn\'t compute...you\'re under arrest! Psych. Please answer "yes", "no", or "y","n"')
  console.log('User entered an illegal response.')
}

//Question 6, # game.
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
    alert('You\'re out of guesses. The # was ' + targetNum + '.')
    console.log('User is out of guesses. Last Guess: ' + guessNum + '.');
  }
}

//Question 7, word game.
var petAnimals = ['lizard', 'goat', 'octopus', 'horse', 'chicken'];
var hints = ['1 is a reptile!', '1 is a cephalapod!', '1 is a horse, like literally...that\'s an answer.', '1 is a farm bird!', '1 has split hooves!', '3 are farm animals!'];
trys = 1;

for (var i = 6; i > 0; i--) {
  var guessPet = prompt('Guess an pet I\'ve owned other than a cat or dog.');
  if (petAnimals.indexOf(guessPet.trim().toLowerCase()) >= 0) {
    alert('Nailed it! You got one on try # ' + trys + '. Correct answers include: lizard, goat, octopus, horse, and chicken');
    console.log('User guessed correctly.');
    score++
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



//Results
alert('You got ' + score + ' out of 7 Correct.');
if (score >= 5) {
  alert('You know you me pretty well, ' + name + '.');
  console.log('User wins. User score is ' + score + '.');
} else {
  alert('You don\'t know jack.');
  console.log('User loses. User score is ' + score + '.');
}
