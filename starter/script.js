'use strict';

//Selecting <elements> directly without DOM
// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.message`).textContent = `congrats`;
// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 20;
// document.querySelector(`.guess`).value = 23;

//_______________________________________________
//2
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
//1
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  // console.log(document.querySelector(`.message`).textContent = `Correct Number!😮‍💨`);
  console.log(guess);
  //when no input
  if (!guess) {
    // document.querySelector(`.message`).textContent = `⛔ no Number`;
    displayMessage(`⛔ no Number`);
  }

  //3
  //when winner
  else if (guess === secretNumber) {
    // document.querySelector(`.message`).textContent = `Correct Number!😮‍💨`;
    displayMessage(`Correct Number!😮‍💨`);
    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  }

  //4 only when the Score will be reduced
  // when guess is wrong
  // because the code was repeating so we made ternary for
  //different one , and had a common condition for same lines .
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(`.message`).textContent =
      //   guess > secretNumber ? `Too High 📈` : `Too low 👇`;
      displayMessage(guess > secretNumber ? `Too High 📈` : `Too low 👇`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      // document.querySelector(`.message`).textContent = `you lost the game!!🥹`;
      displayMessage(`you lost the game!!🥹`);
    }
  }
  /*
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too High 📈`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `you lost the game!!🥹`;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too low 👇`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `you lost the game!!🥹`;
    }
  }
  */
});
document.querySelector(`.again`).addEventListener(`click`, function () {
  // redefining the score and secret no . as there value got changed initially
  // then calling all the elements to be restored
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(`.message`).textContent = `Start Guessing...`;
  displayMessage(`Start Guessing...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
