let numlabel = document.getElementById("num_label");
let result = document.getElementById("result");
let userInput = document.getElementById("text");
let randomNumber = Math.floor(Math.random() * 5) + 1;

function guess() {
  let userguess = parseInt(userInput.value);
  numlabel.innerHTML = randomNumber;
  if (userguess == randomNumber) {
    result.textContent = "You Guess the number!";
  } else if (userguess > 5) {
    numlabel.innerHTML = 0;
    result.textContent = "Ayaw lapas sa 5 bossing";
  } else {
    result.textContent = "Mali, try again!";
  }
}

function reset() {
  randomNumber = Math.floor(Math.random() * 5) + 1;
  numlabel.innerHTML = 0;
  userInput.value = "";
  result.textContent = "";
}
