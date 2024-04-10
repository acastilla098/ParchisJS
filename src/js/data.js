import Player from "./class/Player.js";
import ConfigRoute from "./class/ConfigRoute.js";
import Dice from "./class/Dice.js";

let params = new ConfigRoute();
let colores = ['red','yellow','green','blue'];

function takePlayers(){
    let players = [];
    for (let j = 0; j < params._numPlayers; j++) {
        players[j] = new Player(colores[j],params._tokens);
//console.log('Color: ' + players[j]._color + '; Number of pieces: ' + players[j]._numPieces);
    }

//console.log('Players created: ');
//console.log(players);

    return players;
}

function takeDices(){
    let dices = [];
    for (let d = 0; d < params._numDices; d++) {
        dices[d] = new Dice();
//console.log('Dice created, throw: ' + dices[d].throw());
    }
//console.log('Dices:');
//console.log(dices);

    return dices;
}

export const players = takePlayers();
export const dices = takeDices();