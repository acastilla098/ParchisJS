import Player from "./class/Player.js";
import ConfigRoute from "./class/ConfigRoute.js";

function play() {

    let params = new ConfigRoute();

console.log(`Jugadores: ${params._numPlayers}, Dados: ${params._numDice}, Fichas: ${params._tokens}`);

    let colores = ['rojo','amarillo','verde','azul'];

    let players = [];
    for (let j = 0; j < params._numPlayers; j++) {
        players[j] = new Player(colores[j],params._tokens);
console.log('Jugadores creado: ' + players);
console.log('Color: ' + players[j]._color + '; Number of pieces: ' + players[j]._numPieces);
    }

    let playersIn = 0;
    let index = 0;

    /*Prueba para comprobar quecarga la clase
    let playerTester = new Player('green', 4);
console.log('Jugador creado: ' + playerTester);
console.log('Color: ' + playerTester._color + '; Number of pieces: ' + playerTester._numPieces);*/
}

play();
