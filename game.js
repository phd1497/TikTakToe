let start_first = "X";
let board = ["","","","","","","","",""];
let gameOver = false;


function CheckPoint(event){
    
    if(event.target.textContent != ""){
        alert("Please select another position!");
        return;
    }

    if(gameOver){
        alert("Please restart game!");
        return;
    }
    const checkid = event.target.id;
    board[checkid] = start_first;
    event.target.textContent = start_first;
    checkwinner();
    if(start_first === "X"){
        start_first = "O";
    }else{
        start_first = "X";
    }
}


function checkwinner(){
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    debugger
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameOver = true;
            document.getElementById(a).style.color = '#e63946';
            document.getElementById(b).style.color = '#e63946';
            document.getElementById(c).style.color = '#e63946';
            alert(`${start_first} wins!`);
            return;
        }
    }

    if (!board.includes("")) {
        gameOver = true;
        alert("Play Again!");
    }
}

document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("click", CheckPoint);
});

document.getElementById("restartBtn").addEventListener("click", initializeGame);

function initializeGame() {
    board.fill("");
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");1
    document.querySelectorAll(".cell").forEach(cell => cell.style.color = "#faedcd");
    gameOver = false;
    start_first = "X";
}

