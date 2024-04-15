import Player from "../components/Player.js";
import Dice from "../components/Dice.js";
import GameToken from "../components/GameToken.js";

export default class GameComponents{

    constructor(params){

        this._params = params;

        this._colores = ['red','yellow','green','blue'];

    }

    createTokens(){
        this._tokens = [];

        for (let t = 0; t < this._params.getTokens; t++) {
            this._tokens[t] = new GameToken();
        }

        return this._tokens;
    }

    createPlayers(){

        this._players = [];

        for (let j = 0; j < this._params.getNumPlayers; j++) {

            this._players[j] = new Player(this._colores[j],this._params.getTokens,this.createTokens());

        }
    
        return this._players;

    }
    
    createDices(){

        this._dices = [];

        for (let d = 0; d < this._params.getNumDices; d++) {

            this._dices[d] = new Dice();


        }
    
        return this._dices;
        
    }
}