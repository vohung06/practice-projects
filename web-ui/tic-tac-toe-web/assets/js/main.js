let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;

boxes.forEach(e => {
    e.innerHTML = "";
    e.addEventListener("click", () => {
        if (!isGameOver && e.innerHTML === "") {
            e.innerHTML = turn;
            checkWin();
            checkDraw();
            changeTurn();
        }
    })
})

const playerX = document.querySelector(".x");
const playerO = document.querySelector(".o");

function changeTurn() {
    if (turn === "X") {
        turn = "O";
        playerX.classList.remove("active");
        playerO.classList.add("active");
    }
    else {
        turn = "X";
        playerO.classList.remove("active");
        playerX.classList.add("active");
    }
}