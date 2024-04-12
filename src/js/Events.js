export default class Events{

    constructor(players,dices){

        this._addition = 0;

        this._move = 0;

        this._players = players;

        this._dices = dices;

    }

    throu(playerReady){

console.log(this._players);

        //for (let p = 0; p < players.length; p++) {
            for (let d = 0; d < this._dices.length; d++) {

                this._addition += this._dices[d].throw();

            }

console.log(`Player ${playerReady._color} thrown the dices: ${this._addition}`);
console.log(`Addition: ${this._addition}`);
        //}
    }
    
    _clearAddition(){

        this._addition = 0;

    }
    
    moveToken(){
        this._move = 0;

        this._move += this._addition;

        this._clearAddition();

//console.log('Move: ' + this._move);

        return this._move;

    }

    howMuchPieces(){
        return this._players[0]._numPieces;
    }
    
    howMuchPlayers(){
        return this._players.length;
    }

    nextPlayer(p){
        return this._players[p];
    }

}