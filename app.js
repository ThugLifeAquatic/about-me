//A simple quiz that asks the user Y/N questions and keeps score.
'use strict';
alert('Welcome! Let\'s play a guessing game!');
alert('You\'ll be answering questions about me, Austin Cohrs');

//Keeps score
var score = 0;

//Questions
var canDunk = prompt('Can I dunk a basketball').toLowerCase();
if (canDunk === 'no' || canDunk === 'n') {
  alert('Your right! Gravity has an unusually strong hold on me');
  score++;
  console.log('Question 1 answered correctly. User score is ' + score + '.');
} else if (canDunk === 'yes' || canDunk === 'y'){
  alert('WRONG! Gravity has an unusually strong hold on me');
  console.log('Question 1 WRONG. User score is ' + score + '.');
} else {
  alert('That doesn\'t compute...you\'re under arrest! Psych. Please answer "yes", "no", or "y","n"')
  console.log('User entered an illegal response.')
}
var hasCat = prompt('Do I have a cat?').toLowerCase();
if (hasCat === 'yes' || hasCat ==='y') {
  alert('Yep! Her name is princess Leia.');
  score++;
  console.log('Question 2 answered correctly. User score is ' + score + '.');
} else if (hasCat === 'no' || hasCat === 'n'){
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
} else if (fromWhere === 'yes' || fromWhere === 'y'){
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
} else if (isMarried === 'no' || isMarried === 'n'){
  alert('WRONG! Her name is Chelsea and she\'s a photographer.');
  console.log('Question 4 WRONG. User score is ' + score + '.');
} else {
  alert('That doesn\'t compute...you\'re under arrest! Psych. Please answer "yes", "no", or "y","n"')
  console.log('User entered an illegal response.')
}
var gandalfJedi = prompt('Is Gandalf a jedi?').toLowerCase();
if (gandalfJedi === 'no' || gandalfJedi === 'n') {
  alert('You know your stuff.');
  score++;
  console.log('Question 5 answered correctly. User score is ' + score + '.');
} else if (gandalfJedi === 'yes' || gandalfJedi === 'y'){
  alert('Get out.');
  console.log('Question 5 WRONG. User score is ' + score + '.');
} else {
  alert('That doesn\'t compute...you\'re under arrest! Psych. Please answer "yes", "no", or "y","n"')
  console.log('User entered an illegal response.')
}

//Results
alert('You got ' + score + ' out of 5 Correct.');
if (score >= 4) {
  alert('You know you me pretty well!');
  console.log('User wins. User score is ' + score + '.');
} else {
  alert('You don\'t know jack.');
  console.log('User loses. User score is ' + score + '.');
}
