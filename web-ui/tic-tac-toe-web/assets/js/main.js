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

function checkWin() {
    let winCons = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for (let i = 0; i < winCons.length; i++) {
        let v0 = boxes[winCons[i][0]].innerHTML;
        let v1 = boxes[winCons[i][1]].innerHTML;
        let v2 = boxes[winCons[i][2]].innerHTML;
        if (v0 != " " && v0 === v1 && v1 === v2) {
            isGameOver = true;
        }
    }
}

function checkDraw() {

}