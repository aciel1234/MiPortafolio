let container = document.getElementById('container');
let playerTurn = 0;
const combinaciones = [
    [0,1,2],
    [0,3,6],
    [6,7,8],
    [2,5,8],
    [1,4,7],
    [3,4,5],
    [0,4,5],
    [2,4,6],
]

let player1 = []
let player2 = []

for (let i = 0; i < 9; i++) {
    let cells = document.createElement('div');
    cells.classList.add('cells');
    container.appendChild(cells);
}

for (let i = 0; i < 9; i++) {
container.addEventListener('click', (event) => {
    let clickedCell = event.target;
    if (clickedCell.classList == 'cells' && clickedCell.textContent == '' && playerTurn == 0) {
        clickedCell.textContent = 'X';
        playerAdd(i);
        playerTurn = 1;  
    } else if (clickedCell.classList == 'cells' && clickedCell.textContent == '' && playerTurn == 1) {
        clickedCell.textContent = 'O';
        playerTurn = '0';
    }

    checkWinner()
})
}

function playerAdd(i) {
    if (playerTurn == 0) {
        player1.push(i);
    }
}
 
function checkWinner() {
    combinaciones.find((item) => {
        if (item.filter((i)=> player1.includes(i)).length === 3) {
            alert('asd')
        }
    })
}
 
 
 /* let cell = document.querySelectorAll('.cell');
let playerTurn = 0;

const combinaciones = [
    [0,1,2],
    [0,3,6],
    [6,7,8],
    [2,5,8],
    [1,4,7],
    [3,4,5],
    [0,4,5],
    [2,4,6],
]

let player1 = [];
let player2 = [];

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', ()=> {
    if (playerTurn === 0) {
        Player1(i);
    } else {
        if (cell[i].innerHTML == '') {
        Player2(i)
        }
    }
    checkWinner();
    })
}

function Player1(i) {
    cell[i].innerHTML = 'X';
        playerTurn = 1;
        player1.push(i)
}
function Player2(i) {
    cell[i].innerHTML = 'O';
        playerTurn = 0;
        player2.push(i)
}

function checkWinner() {
    combinaciones.find((item) => {
        if (item.filter((i)=> player1.includes(i)).length === 3) {
            let confirmar = confirm('El jugador 1 ha ganado. ¿Desea comenzar un nuevo juego?');
                if (confirmar == true) {
                    newGame()
                }
            return item
        } else if (item.filter((i)=> player2.includes(i)).length === 3) {
            let confirmar = confirm('El jugador 2 ha ganado. ¿Desea comenzar un nuevo juego?');
            if (confirmar == true) {
                newGame()
            }
            return
        }
    })
}

function newGame() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
        player1 = [];
        player2 = [];
        playerTurn = 0;
    }
}
    */