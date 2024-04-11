import Player from "./class/Player.js";
import ConfigRoute from "./class/ConfigRoute.js";
import Dice from "./class/Dice.js";

export default class GameComponents{
    constructor(params){
        this._params = params;//ConfigRoute
        this._colores = ['red','yellow','green','blue'];
    }

    createPlayers(){
        this._players = [];
        for (let j = 0; j < this._params._numPlayers; j++) {
            this._players[j] = new Player(this._colores[j],this._params._tokens);
    //console.log('Color: ' + players[j]._color + '; Number of pieces: ' + players[j]._numPieces);
        }
    
    //console.log('Players created: ');
    //console.log(players);
    
        return this._players;
    }
    
    createDices(){
        this._dices = [];
        for (let d = 0; d < this._params._numDices; d++) {
            this._dices[d] = new Dice();
    //console.log('Dice created, throw: ' + dices[d].throw());
        }
    //console.log('Dices:');
    //console.log(dices);
    
        return this._dices;
    }
}