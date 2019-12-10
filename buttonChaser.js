var score = 0;
var aWidth;
var aHeight;
var timer;
var iterations = 0;

// hide the gameInterface
document.getElementById("gameInterface").style.display = "none";
// Game title
document.getElementById("welcome").innerHTML = "Button Chaser Game";

// launch game function
 function launch() {

  // hide the elements
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('startGame').style.display = 'none';

  // Display the interface
  // run setGameAreaBounds
  setGameAreaBounds();
  document.getElementById("gameInterface").style.display = "block";
  // Move the button
  moveDot()

};

// Event Listener for the startGame
document.getElementById('startGame').addEventListener('click', launch)




// Setting the area dimentions
function setGameAreaBounds() {
  // Get availble width and height
  aWidth = innerWidth;
  aHeight = innerHeight;
  // subtract for title and score
  aWidth -= 22;
  aHeight -= 97;
  // display the box based on the browser
  document.getElementById("gameArea").style.width = aWidth + "px";
  document.getElementById("gameArea").style.height = aHeight + "px";
  // event listner for the click on the button
  document.getElementById("dot").addEventListener("click", detectHit);

  aWidth -= 74;
  aHeight -= 74;

}

// Detecting the hits and adding to score
function detectHit() {
  score += 1;
  document.getElementById("scoreLabel").innerHTML = "Score: " + score;
}


// fuction to move the button
function moveDot() {


  var x = Math.floor(Math.random() * aWidth);
  var y = Math.floor(Math.random() * aHeight);

  if (x < 10) x = 10;
  if (y < 10) y = 10;

  document.getElementById("dot").style.left = x + "px";
  document.getElementById("dot").style.top = y + "px";

  if (iterations < 20) {
    timer = setTimeout("moveDot()", 1000);
    console.log(timer)
  } else {
    clearInterval(timer);
    document.getElementById("gameInterface").style.display = "none";
    document.getElementById('welcome').style.display = 'block';
    document.getElementById('welcome').innerHTML = "Score: " + score + "     <>     Game Over!";
    document.getElementById('startGame').style.display = 'block';
    restGame();

  }
  iterations++;
}

function restGame () {
  score = 0;
  aWidth;
  aHeight;
  timer;
  iterations = 0;
  document.getElementById("scoreLabel").innerHTML = "Score: " + score;
}

