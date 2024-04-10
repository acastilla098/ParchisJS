import Player from "./class/Player.js";


function play() {

    //Obtener datos de index
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
console.log(urlParams);

    const numPlayers = urlParams.get('playerUnit');
    const numDice = urlParams.get('diceUnit');
    const tokens = urlParams.get('tokenUnit');
console.log(`Jugadores: ${numPlayers}, Dados: ${numDice}, Fichas: ${tokens}`);

    let colores = ['rojo','amarillo','verde','azul'];

    let players = [];
    for (let j = 0; j < numPlayers; j++) {
        players[j] = new Player(colores[j],tokens);
console.log('Jugadores creado: ' + players);
console.log('Color: ' + players[j]._color + '; Number of pieces: ' + players[j]._numPieces);
    }

    let playersIn = 0;
    let index = 0;

    let playerTester = new Player('green', 4);
console.log('Jugador creado: ' + playerTester);
console.log('Color: ' + playerTester._color + '; Number of pieces: ' + playerTester._numPieces);
}

play();
