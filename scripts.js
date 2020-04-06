let boardTile = document.getElementsByClassName("boardTile");
let playerIndication = document.getElementById("playerIndicator");
let div = document.getElementsByTagName("div");
let p = document.getElementsByTagName("p");
let winner = false;

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

let positions = Array.from(boardTile); //Here I create an array from my boardtile class

 //The function checkForWin gets the winning combinations and passes the positions (which are represented by 0/1/2) through the function and then compares the inner HTML to make sure the positions contain all the same text.
function checkForWin () {
    winningCombinations.forEach(function (winCombos){
        let position0 = positions[winCombos[0]].innerHTML;
        let position1 = positions[winCombos[1]].innerHTML;
        let position2 = positions[winCombos[2]].innerHTML;
        let winning = position0 !== "" && position0 === position1 && position1 === position2;

        if (winning === true) {
            winner = true;
            playerIndication.innerText = "Winner! Winner!";
            winCombos.forEach(function(index) {
                positions[index].className += " winner";
            })
            stopGame();
        }
    })
}

function stopGame(){
    stopO();
    stopX();        
}

//Below is the code for Player one to place an X
function playerOneTurn() {
    for (i = 0; i < boardTile.length; i++) {
        boardTile[i].addEventListener("click", placeX);
        boardTile[i].addEventListener("mouseover", hoverX);
    }
}

function hoverX(){
    if (winner === true) {
        return;
    }
    playerIndication.innerHTML = "Player 1 please place an X";
}

function placeX(ev){
    let x = ev.target.id;
    let content = ev.target.innerHTML;
    if (content === "" && winner === false) {
        document.getElementById(x).innerHTML = "x";
        document.getElementById(x).className = document.getElementById(x).className + " done x";
        checkForWin();
        stopX();
        playerTwoTurn();
    }
}

function stopX() {
    for (i = 0; i < boardTile.length; i++) {
        boardTile[i].removeEventListener("click", placeX);
        boardTile[i].removeEventListener("mouseover", hoverX);
    }
}

//This calls the player one function at the beginning of loading the window.
playerOneTurn();

//Below is the code for Player one to place an O
function playerTwoTurn() {
    for (i = 0; i < boardTile.length; i++) {
        boardTile[i].addEventListener("click", placeO);
        boardTile[i].addEventListener("mouseover", hoverO);
    }
}

function hoverO() {
    if (winner === true) {
        return;
    }
    playerIndication.innerHTML = "Player 2 please place an O";
}

function placeO(ev){
    let sectionId = ev.target.id;
    let content = ev.target.innerHTML;
    if (content === "" && winner === false) {
        document.getElementById(sectionId).innerHTML = "o";
        document.getElementById(sectionId).className = document.getElementById(sectionId).className + " done o";
        checkForWin();
        stopO();
        playerOneTurn();    
    }
}

function stopO() {
    for (i = 0; i < boardTile.length; i++) {
        boardTile[i].removeEventListener("click", placeO);
        boardTile[i].removeEventListener("mouseover", hoverO);
    }
}

function reset() {
    window.location.reload(true);
}