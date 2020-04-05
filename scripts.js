let boardTile = document.getElementsByClassName("boardTile");
let playerIndication = document.getElementById("playerIndicator");
let div = document.getElementsByTagName("div");


const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

//Play game
//Place 
//check win
//check draw
//switch turns

playerOneTurn();

//Below is the code for Player one to place an X
function playerOneTurn() {
    playerIndication.innerHTML = "Player 1 please place an X";
    for (i = 0; i < boardTile.length; i++) {
        boardTile[i].addEventListener("click", placeX);
    }
}

function placeX(ev){
    let x = ev.target.id;
    let content = ev.target.innerHTML;
    if (content === "") {
        document.getElementById(x).innerHTML = "x";
        document.getElementById(x).className = document.getElementById(x).className + " done x";
    }
    //Check win/draw function needed here
    stopX();
    playerTwoTurn();
}

function stopX() {
    for (i = 0; i < boardTile.length; i++) {
        boardTile[i].removeEventListener("click", placeX);
    }
}

//Below is the code for Player one to place an O
function playerTwoTurn() {
    playerIndication.innerHTML = "Player 2 please place an o";
    for (i = 0; i < boardTile.length; i++) {
        boardTile[i].addEventListener("click", placeO);
    }
}

function placeO(ev){
    let sectionId = ev.target.id;
    let content = ev.target.innerHTML;
    if (content === "") {
        document.getElementById(sectionId).innerHTML = "o";
        document.getElementById(sectionId).className = document.getElementById(sectionId).className + " done o";
    }
        //Check win / draw.
    stopO();
    playerOneTurn();
}

function stopO() {
    for (i = 0; i < boardTile.length; i++) {
        boardTile[i].removeEventListener("click", placeO);
    }
}
