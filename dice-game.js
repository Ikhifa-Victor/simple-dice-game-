//create two players
// make the player names change when edited
// make the roll animation function
// generate random numbers
// set the value to each dice
// set the time out
// determine how the winner works

// first we assign names
let player1 = "player1";
let player2 = "player2";

// declare a function to edith the names of players
function editNames() {
  player1 = prompt("Player1 Name");
  player2 = prompt("Player2 Name");

  // return player1 and player 2 if their lenght is less than 1
  if (player1.length < 1 || player2.length < 1) {
    alert("Please Enter Valid Name");
    return;
  }

  // when players names are changed disolay =>
  document.getElementById("p1").innerHTML = player1;
  document.getElementById("p2").innerHTML = player2;

  //document.querySelector("p")[0].innerHTML = player1;
  //document.querySelector("p")[1].innerHTML = player2;
}

// make the dice roll
// first we  create the roll the dice function
//
function rollTheDice() {
  let diceNum1 = document.querySelector(".img1");
  let diceNum2 = document.querySelector(".img2");

  // we put dice rolling animation
  diceNum1.setAttribute("src", "diceroll.gif");
  diceNum2.setAttribute("src", "diceroll.gif");

  //because i want each dice to return avalue after the diceroll.gif displays
  // i will generate random numbers inside the settimeout function and
  // set a value for every dice roll
  // set timeout
  setTimeout(() => {
    // Generate random number 1 - 6
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // To set the values to each dice
    diceNum1.setAttribute("src", "dice-" + randomNumber1 + ".png");
    diceNum2.setAttribute("src", "dice-" + randomNumber2 + ".png");

    // Compare the value to  determine the winner or draw
    if (randomNumber1 > randomNumber2) {
      result = document.querySelector("h1").innerHTML =
        player1 + " " + "" + "WINS!";
    } else if (randomNumber1 < randomNumber2) {
      result = document.querySelector("h1").innerHTML =
        player2 + " " + " " + "WINS!";
    } else {
      result = document.querySelector("h1").innerHTML = "A DRAW!";
    }
    return;
    //time out at 2 milli seconds
  }, 2000);
}
