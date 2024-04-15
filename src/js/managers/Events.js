export default class Events{

    constructor(players,dices,tokens){

        this._players = players;

        this._dices = dices;

        this._tokens = tokens;

    }

    throu(dice){
        let roll = 0;

        dice.throw();
        roll = dice.getNumber;

        return roll;
    }
    
    move_token(token_id, moves){
        if (this._tokens[token_id].isMovementAllowed(moves)){
            this._tokens[token_id].move(moves);
        }
    }

    _update_ui(){
        
    }

    _end_turn(player){

console.log('End: ' + player.getEnd);
console.log('El jugador ' + player.getColor + ' ha terminado.');

        player.setEnd = true;
console.log('End: ' + player.getEnd);

    }

    _start_turn(player){

console.log('El jugador ' + player.getColor + ' va a tirar.');

        let rollP = 0;
        for (let d = 0; d < this._dices.length; d++) {
            rollP += this.throu(this._dices[d]);
        }

console.log('Ha sacado una tirada de ' + rollP);

    }

    _finish_check(color){

        for (let p = 0; p < this._players.length; p++) {

            if (this._players[p].getColor == color && this._players[p].getEnd) {

                return true;
            }            
        }

        return false;
    }

    isFinished(){

        let finish = false;

        this._players.forEach(player => {

            if (this._finish_check(player.getColor)) {

                finish = true;

            }else{

                finish = false;
            }
        });

console.log('finish: ' + finish);

        return finish;
    }

    getWinner(){

        let pFinish = [];

        for (let p = 0; p < this._players.length; p++) {

          if (this._finish_check(this._players[p].getColor)) {
//console.log(this._players[p]);
            pFinish.push(this._players[p]);

          }
        }
//console.log(pFinish);
        return pFinish[0];
    }

    getTurnPlayer(){
        //return player
    }

    startGame(){
        do {
        
            for (let p = 0; p < this._players.length; p++) {
//console.log(this._players[p]);
                this._start_turn(this._players[p]);
                this._end_turn(this._players[p]);
            }
            
        } while (!(this.isFinished()));

console.log('El ganador es: ' + this.getWinner().getColor);
        
    }
}