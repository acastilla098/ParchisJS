export default class Events{

    constructor(players,dices){
        this._addition = 0;
        this._move = 0;

        this._players = players;
        this._dices = dices;
    }

    throu(){
console.log(this._players);
        //for (let p = 0; p < players.length; p++) {
            for (let d = 0; d < this._dices.length; d++) {
                this._addition += this._dices[d].throw();
            }
            console.log(`Player ${this._players[0]._color} thrown the dices: ${this._addition}`);
            console.log(`Addition: ${this._addition}`);
        //}
    }
    
    clearAddition(){
        this._addition = 0;
    }
    
    moveToken(){
    //console.log(addition);
            this._move += this._addition;
            this.clearAddition();
    console.log('Move: ' + this._move);
        return this._move;
    }

}