'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message'));

document.querySelector('.message').textContent = 'High Score 🍊🍊🍊';
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 100;
console.log(document.querySelector('.number').textContent);

document.querySelector('.score').textContent = 50;
console.log(document.querySelector('.score').textContent);
*/

// document.querySelector('.guess').value = 100;
// console.log(document.querySelector('.guess').value);
// console.log(document.querySelector('.guess'));

//-------Above Script is practise purpose only------------//

//Create the variable for Random number, this is global variable
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Add the random number value in the "number" class value
//document.querySelector('.number').textContent = secretNumber;

//Create the score variable, this is global variable
let score = 20;

//Create the High score Value, this is global variable
let highScore = 0;

//Create the new function expression for ".message" class to simplify the code
let displyMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //Create variable

  console.log(guess, typeof guess);

  //Player gives no number
  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number 🚫🚫🚫';

    //calling the function
    displyMessage('No Number 🚫🚫🚫');
  }
  //When Player win the game
  else if (guess === secretNumber) {
    //Add the random number value in the "number" class value
    document.querySelector('.number').textContent = secretNumber;

    //document.querySelector('.message').textContent = 'Correct Number 🎇🎇🎇';

    //calling the function
    displyMessage('Correct Number 🎇🎇🎇');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //Highscore Value, using the if condition
    if (score > highScore) {
      highScore = score;

      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //When Player gives a wrong value
  else if (guess !== secretNumber) {
    if (score > 1) {
      //We are using the ternary operator
      //document.querySelector('.message').textContent = guess > secretNumber ? 'Too High 📈📈📈' : 'Too Low 📉📉📉';

      //calling the function
      displyMessage(
        guess > secretNumber ? 'Too High 📈📈📈' : 'Too Low 📉📉📉'
      );

      score--;

      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You Loose the Game ✨✨✨';

      //calling the function
      displyMessage('You Loose the Game ✨✨✨');

      document.querySelector('.score').textContent = 0;
    }
  }
});

//When player gives a high value
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too High 📈📈📈';

//       score--;

//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent =
//         'You Loose the Game ✨✨✨';

//       document.querySelector('.score').textContent = 0;
//     }
//   }

//When Player gives a Low value
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low 📉📉📉';

//       score--;

//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent =
//         'You Loose the Game ✨✨✨';

//       document.querySelector('.score').textContent = 0;
//     }
//   }
//});

//The above function will be call everytime while clicking the check button

//"Again button" reset the value
document.querySelector('.again').addEventListener('click', function () {
  //The score will be reset to initial value, this is Global variable
  score = 20;

  document.querySelector('.number').textContent = '?';

  //document.querySelector('.message').textContent = 'Start guessing 🤔🤔🤔';

  //calling the function
  displyMessage('Start guessing 🤔🤔🤔');

  document.querySelector('body').style.backgroundColor = 'rgb(61, 51, 51)';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';

  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
