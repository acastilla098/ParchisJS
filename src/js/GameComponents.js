import Player from "./class/Player.js";
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

        }
    
    //console.log('Players created: ');
    //console.log(players);
    
        return this._players;

    }
    
    createDices(){

        this._dices = [];

        for (let d = 0; d < this._params._numDices; d++) {

            this._dices[d] = new Dice();


        }

    //console.log('Dices:');
    //console.log(dices);
    
        return this._dices;
        
    }
}