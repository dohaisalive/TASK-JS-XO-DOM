let XorO = true;
let writeText = "X";

function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}

/**
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 */
function clickButton(index) {
  if (!document.getElementById(index).innerHTML) {
    if (XorO) {
      writeText = "X";
    } else {
      writeText = "O";
    }
    fillButton(index, writeText);
    XorO = !XorO;
  }
  checkWinner();
  checkIfDraw();
}

function checkWinner() {
  let element1;
  let element2;
  let element3;

  //loop through rows
  for (let i = 1; i <= 9; i = i + 3) {
    element1 = document.getElementById(i).innerHTML;
    element2 = document.getElementById(i + 1).innerHTML;
    element3 = document.getElementById(i + 2).innerHTML;
    isThereAWinner(element1, element2, element3);
  }

  //loop through columns
  for (let i = 1; i <= 3; i++) {
    element1 = document.getElementById(i).innerHTML;
    element2 = document.getElementById(i + 3).innerHTML;
    element3 = document.getElementById(i + 6).innerHTML;
    isThereAWinner(element1, element2, element3);
  }

  //check diagonals
  element1 = document.getElementById(1).innerHTML;
  element2 = document.getElementById(5).innerHTML;
  element3 = document.getElementById(9).innerHTML;
  isThereAWinner(element1, element2, element3);

  element1 = document.getElementById(3).innerHTML;
  element2 = document.getElementById(5).innerHTML;
  element3 = document.getElementById(7).innerHTML;
  isThereAWinner(element1, element2, element3);
}

function isThereAWinner(element1, element2, element3) {
  if (element1 === element2 && element1 === element3 && element1.length !== 0) {
    winningAlert(`${element1}`);
  }
}

function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    restartGame();
  }
}

function checkIfDraw() {
  let counter = 0;
  for (let i = 1; i <= 9; i++) {
    if (document.getElementById(i).innerHTML.length !== 0) {
      counter++;
    }
    if (counter === 9) {
      alert("draw! try again");
      restartGame();
    }
  }
}

function restartGame() {
  for (let i = 1; i <= 9; i++) {
    fillButton(i, "");
  }
  writeText = "X";
  XorO = true;
}
