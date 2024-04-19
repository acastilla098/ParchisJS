import Player from "../components/Player.js";
import Dice from "../components/Dice.js";
import GameToken from "../components/GameToken.js";

export default class GameComponents{

    constructor(params){

        this._params = params;

        this._colores = ['red','yellow','green','blue'];

        this._players = this.createPlayers();
        this._dices = this.createDices();

    }

    get getPlayers(){
        return this._players;
    }
    
    get getDices(){
        return this._dices;
    }

    countPlayers(){
        return this._players.length;
    }
    
    countDices(){
        return this._dices.length;
    }

    createTokens(){
        let tokens = [];

        for (let t = 0; t < this._params.getTokens; t++) {
            tokens[t] = new GameToken();
        }

        return tokens;
    }

    createPlayers(){


        for (let j = 0; j < this._params.getNumPlayers; j++) {

            if (this._params.getNumPlayers == 2 && j > 0) {
                
                this._players[j] = new Player(this._colores[j+1],this._params.getTokens,this.createTokens());

            } else {
                this._players[j] = new Player(this._colores[j],this._params.getTokens,this.createTokens());
            }

        }
    
        return this._players;

    }
    
    createDices(){


        for (let d = 0; d < this._params.getNumDices; d++) {

            this._dices[d] = new Dice();


        }
    
        return this._dices;
        
    }

}