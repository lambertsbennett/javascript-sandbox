'use strict';

// Generate a random number between 1 and 20
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Display something to the message field.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Logic for check button clicks.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // Case when no number is entered.
  if (!guess) {
    displayMessage('No Number!');
  }
  // Case when guess is correct.
  else if (guess === number) {
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // Case when guess is not correct.
  else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('You lost the game!');
    }
  }
});

// Logic for again button clicks.
document.querySelector('.again').addEventListener('click', function () {
  const number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = number;
  document.querySelector('.score').textContent = 20;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
