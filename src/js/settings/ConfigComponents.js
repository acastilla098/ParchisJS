import Player from "../components/Player.js";
import Dice from "../components/Dice.js";
import GameToken from "../components/GameToken.js";

export default class GameComponents{

    constructor(params){

        this._COLORS = {
            COLOR_RED:          'red',
            COLOR_YELLOW:       'yellow',
            COLOR_GREEN:        'green',
            COLOR_BLUE:         'blue'
        }

        this.valuesColors = Object.values(this._COLORS);

        this._params = params;

        this._players = [];
        this._dices = [];

        this.createPlayers();
        this.createDices();
    }

    get givePlayers(){
        return this._players;
    }
    
    get giveDices(){
        return this._dices;
    }

    getValuesColors(){
        return this.valuesColors;
    }

    getThisValuesColors(x){
        return this.valuesColors[x]
    }

    countPlayers(){
        return this._players.length;
    }
    
    countDices(){
        return this._dices.length;
    }

    createTokens(){
        let tokens = [];

        for (let t = 0; t < this._params.howMuchTokens; t++) {
            tokens[t] = new GameToken();
        }

        return tokens;
    }

    createPlayers(){


        for (let j = 0; j < this._params.howMuchPlayers; j++) {

            if (this._params.howMuchPlayers == 2 && j > 0) {
                
                this._players[j] = new Player(this.valuesColors[j+1],this._params.howMuchTokens,this.createTokens());

            } else {
                this._players[j] = new Player(this.valuesColors[j],this._params.howMuchTokens,this.createTokens());
            }

        }
    
        return this._players;

    }
    
    createDices(){


        for (let d = 0; d < this._params.howMuchDices; d++) {

            this._dices[d] = new Dice();

        }
    
        return this._dices;
        
    }

}