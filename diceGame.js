// Obtener DOMs
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const button = document.getElementById('rightButton');
//document.getElementById('miTitulo').innerText = 'Nuevo Título';
const wins = document.getElementById('win');
const winsss = document.getElementById('playAgain');
var shifts = 0;
var diceResults = [];

// Agregar event listeners a los botones
leftButton.addEventListener('click', () => {
    rollDice('leftImage');
    leftButton.disabled = true;
});
rightButton.addEventListener('click', () => {
    rollDice('rightImage');
    rightButton.disabled = true;
});

//Tirar
function rollDice(side) {
    // Generará un número entero entre 1 y 6, ambos incluidos
    var diceNumber = getRandomIntInRange(1, 6);
    console.log(diceNumber);
    diceResults.push(diceNumber);

    // Mostrar la imagen correspondiente
    updateDiceImage(side, diceNumber);

    shifts++;
    identifyWinner(side);
}

// Generar número aleatorio
function getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function identifyWinner(side) {
    if (shifts === 2) {
        console.log("2 veces");
        //console.log(side);
        
        if (diceResults[0] === diceResults[1]) {
            console.log(`¡Es un empate! Ambos lanzamientos fueron ${diceResults[0]}.`);
            wins.innerText = 'Same';
        } 
        else if (side == 'leftImage'){
            console.log(side);
            if (diceResults[0] > diceResults[1]) {
                console.log(`Gana 2 con ${diceResults[0]}`);
                wins.innerText = 'Player Two Wins';
            }
            else {
                console.log(`Gana 1 con ${diceResults[1]}.`);
                wins.innerText = 'Player One Wins';
            }
        } else {
            console.log(side);
            if (diceResults[0] > diceResults[1]) {
                console.log(`Gana 1 con ${diceResults[0]}`);
                wins.innerText = 'Player One Wins';
            }
            else {
                console.log(`Gana 2 con ${diceResults[1]}.`);
                wins.innerText = 'Player Two Wins';
            }
        }
        document.getElementById('playAgain').style.display = 'block';
    }
}

function updateDiceImage(side, diceNumber) {
    const diceImage = document.getElementById(side);
    diceImage.src = `dice${diceNumber}.png`; 
    diceImage.style.display = 'block'; // Mostrar la imagen
}

function playAgain(){
    winsss.style.display = 'none';
    diceResults = [];
    shifts = 0;
    rightButton.disabled = false;
    leftButton.disabled = false;
    wins.innerText = 'Dice Game';
}