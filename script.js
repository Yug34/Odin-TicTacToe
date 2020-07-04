let moveCounter = 0;

let tieCount = 0;
let playerOneWins = 0;
let oldPlayerOneWins = 0;
let playerTwoWins = 0;
let oldPlayerTwoWins = 0;

const Player = (name, marker) => {
    return {name, marker};
}

let p1Wins = document.getElementById("p1Wins");
let tieDisplay = document.getElementById("ties");
let p2Wins = document.getElementById("p2Wins");

let scoreBoard = document.getElementById('previousGames');

let playAgain = document.getElementById('playAgainBtn');

let gridElements = document.querySelectorAll('.cell');
gridElements.forEach((div) => {
    div.addEventListener('click', makeMove);
})

let gameBoard = [];
for(let i = 0; i < 9; i++)
{
    gameBoard.push(undefined);
}

let player1 = Player(prompt("Enter Player One's name", "Player One"), "x");
let player2 = Player(prompt("Enter Player Two's name", "Player Two"), "o");

p1Wins.textContent = player1.name + ": 0 | ";
p2Wins.textContent = " | " + player2.name + ": 0";

function makeMove(e) {
    if(moveCounter%2 === 0) {
        e.target.textContent = player1.marker;
    }
    else {
        e.target.textContent = player2.marker;
    }

    gameBoard[parseInt(e.target.getAttribute('id').charAt(3)) - 1] = e.target.textContent;

    if(gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[1] !== undefined || gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== undefined || gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== undefined || gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== undefined || gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]  && gameBoard[4] !== undefined || gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== undefined || gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[8] !== undefined || gameBoard[6] === gameBoard[4] && gameBoard[4] === gameBoard[2] && gameBoard[4] !== undefined)
    {
        playAgain.setAttribute("id", "playAgainBtnActive");
        playAgain.addEventListener('click', updateScoreboard);

        gridElements.forEach((div) => {
            div.removeEventListener('click', makeMove);
        });

        if(moveCounter%2 === 0) {
            playerOneWins++;
            p1Wins.textContent =  player1.name + ": " + playerOneWins + " | ";
        }
        else
        {
            playerTwoWins++;
            p2Wins.textContent = " | " + player2.name + ": " + playerTwoWins;
        }
    }
    else if(gameBoard[0] !== undefined && gameBoard[1] !== undefined && gameBoard[2] !== undefined && gameBoard[3] !== undefined && gameBoard[4] !== undefined && gameBoard[5] !== undefined && gameBoard[6] !== undefined && gameBoard[7] !== undefined && gameBoard[8] !== undefined)
    {
        playAgain.setAttribute("id", "playAgainBtnActive");
        playAgain.addEventListener('click', updateScoreboard);
        tieCount++;
        tieDisplay.textContent = "Ties: " + tieCount;
    }

    e.target.removeEventListener('click', makeMove);

    moveCounter++;
}

function updateScoreboard() {
    let table = document.createElement('table');
    table.setAttribute('class', "scoreTable");
    let row1 = document.createElement('tr');
    row1.setAttribute('class', "scoreRow");
    let td1 = document.createElement('td');
    td1.setAttribute('class', "scoreElement");
    if(gameBoard[0] !== undefined){
        td1.textContent = gameBoard[0];
    }
    else {
        td1.textContent = "_";
    }
    let td2 = document.createElement('td');
    td2.setAttribute('class', "scoreElement");
    if(gameBoard[1] !== undefined){
        td2.textContent = gameBoard[1];
    }
    else {
        td2.textContent = "_";
    }
    let td3 = document.createElement('td');
    td3.setAttribute('class', "scoreElement");
    if(gameBoard[2] !== undefined){
        td3.textContent = gameBoard[2];
    }
    else {
        td3.textContent = "_";
    }
    row1.appendChild(td1);
    row1.appendChild(td2);
    row1.appendChild(td3);

    let row2 = document.createElement('tr');
    row2.setAttribute('class', "scoreRow");
    let td4 = document.createElement('td');
    td4.setAttribute('class', "scoreElement");
    if(gameBoard[3] !== undefined){
        td4.textContent = gameBoard[3];
    }
    else {
        td4.textContent = "_";
    }
    let td5 = document.createElement('td');
    td5.setAttribute('class', "scoreElement");
    if(gameBoard[4] !== undefined){
        td5.textContent = gameBoard[4];
    }
    else {
        td5.textContent = "_";
    }
    let td6 = document.createElement('td');
    td6.setAttribute('class', "scoreElement");
    if(gameBoard[5] !== undefined){
        td6.textContent = gameBoard[5];
    }
    else {
        td6.textContent = "_";
    }
    row2.appendChild(td4);
    row2.appendChild(td5);
    row2.appendChild(td6);

    let row3 = document.createElement('tr');
    row3.setAttribute('class', "scoreRow");
    let td7 = document.createElement('td');
    td7.setAttribute('class', "scoreElement");
    if(gameBoard[6] !== undefined){
        td7.textContent = gameBoard[6];
    }
    else {
        td7.textContent = "_";
    }
    let td8 = document.createElement('td');
    td8.setAttribute('class', "scoreElement");
    if(gameBoard[7] !== undefined){
        td8.textContent = gameBoard[7];
    }
    else {
        td8.textContent = "_";
    }
    let td9 = document.createElement('td');
    td9.setAttribute('class', "scoreElement");
    if(gameBoard[8] !== undefined){
        td9.textContent = gameBoard[8];
    }
    else {
        td9.textContent = "_";
    }
    row3.appendChild(td7);
    row3.appendChild(td8);
    row3.appendChild(td9);

    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);

    if(oldPlayerOneWins !== playerOneWins)
    {

        td1.style.borderColor = "#4caf50";
        td2.style.borderColor = "#4caf50";
        td3.style.borderColor = "#4caf50";
        td4.style.borderColor = "#4caf50";
        td5.style.borderColor = "#4caf50";
        td6.style.borderColor = "#4caf50";
        td7.style.borderColor = "#4caf50";
        td8.style.borderColor = "#4caf50";
        td9.style.borderColor = "#4caf50";
        oldPlayerOneWins = playerOneWins;
    }
    else if(oldPlayerTwoWins !== playerTwoWins)
    {
        td1.style.borderColor = "#f44336";
        td2.style.borderColor = "#f44336";
        td3.style.borderColor = "#f44336";
        td4.style.borderColor = "#f44336";
        td5.style.borderColor = "#f44336";
        td6.style.borderColor = "#f44336";
        td7.style.borderColor = "#f44336";
        td8.style.borderColor = "#f44336";
        td9.style.borderColor = "#f44336";
        oldPlayerTwoWins = playerTwoWins;
    }

    scoreBoard.appendChild(table);
    scoreBoard.insertBefore(table, scoreBoard.firstChild);

    for(let i = 0; i < 9; i++) {
        gameBoard[i] = undefined;
    }

    gridElements.forEach((div) => {
        div.textContent = "_";
        div.addEventListener('click', makeMove);
    })
    playAgain.setAttribute("id", "playAgainBtn");
    playAgain.removeEventListener('click', updateScoreboard);

    moveCounter = 0;
}