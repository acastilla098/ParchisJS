import Player from "./class/Player.js";
import Dice from "./class/Dice.js";

export default class GameComponents{

    constructor(params){

        this._params = params;

        this._colores = ['red','yellow','green','blue'];

    }

    createPlayers(){

        this._players = [];

        for (let j = 0; j < this._params._numPlayers; j++) {

            this._players[j] = new Player(this._colores[j],this._params._tokens);

        }
    
        return this._players;

    }
    
    createDices(){

        this._dices = [];

        for (let d = 0; d < this._params._numDices; d++) {

            this._dices[d] = new Dice();


        }
    
        return this._dices;
        
    }
}