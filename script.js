'use script';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct !';
document.querySelector('.score').textContent = '20';
document.querySelector('.').textContent = '11';
document.querySelector('.guess').value='12';
console.log(document.querySelector('.guess').value) = '20';
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = '20';
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.btn-check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // number hides upon click
  /* document.querySelector('.guess').value = '';*/
  console.log(guess);
  //when there is no input..
  if (!guess) {
    //  document.querySelector('.message').textContent = '⛔No Number!';
    displayMessage('⛔No Number!');
  } //When player wins the game..
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '✅ Correct Number!';
    displayMessage('✅ Correct Number!');
    document.querySelector('.guess').style.backgroundColor = '#60b347';
    document.querySelector('.mehraj').innerHTML = secretNumber;
    /* document.querySelector('.number').textContent = secretNumber;*/
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '200px';
    /*document.querySelector('.number').style.height = '200px';
    document.querySelector('.line').style.marginTop = '-200px';*/

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when guess is wrong...(using ternary operator)
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '🔺Number is Too High!' : '🔺Number is Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '💥You Lost The Game ! ';
      displayMessage('💥You Lost The Game ! ');
      document.querySelector('.score').textContent = 0;
    }
  }
  // //when gues is too high..
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🔺Number is Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       ' 💥You Lost The Game ! ';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } //when guess is too low..
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🔺Number is Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You Lost The Game ! ';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.btn-again').addEventListener('click', function () {
  score = '20';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = '💭Start Guessing...';
  displayMessage('💭Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.mehraj').innerHTML = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '150px';
  document.querySelector('.guess').style.backgroundColor = '#222';
});
// document.querySelector('.between').addEventListener('click', function () {
//   window.alert(`Guess a number between 1 and 20. For every wrong guess 1 point will be deducted from the default score 20. For every wrong attempt a message will tell you that whether your number is greater or lesser than the secret number. You will lose the game once the score becomes zero.
//    So let's have a play and see, can you get the number in first very attempt and have a 20!`);
// });

//Building modal window..
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const openBtn = document.querySelector('.between');
const closeModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};
openBtn.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
});
closeBtn.addEventListener('click', function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
});
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
