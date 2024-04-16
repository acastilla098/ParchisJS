export default class Events{

    constructor(players,dices){

        this._players = players;

        this._dices = dices;

        this._pFinish = [];

    }

    throu(dice){
        let roll = 0;

        dice.throw();
        roll = dice.getNumber;

        return roll;
    }
    
    move_token(player,token_id, moves){

        if (player._pieces[token_id].isMovementAllowed(moves)){

            player._pieces[token_id].move(1);

        }

console.log('La ficha ' + token_id + ' se mueve: ' + moves + '; posición de la ficha: ' + player._pieces[token_id].getPosition);
    
    }

    _update_ui(){
        
    }

    _end_turn(player){
        player.setEnd = false;

console.log('El jugador ' + player.getColor + ' ha terminado.');

        let eq = 0;

        for (let ind = 0; ind < player._pieces.length; ind++) {

            if (player._pieces[ind].getPosition == player._pieces[0].getPosition) {
                eq++;
            }
        }

        if (eq == 4) {
            player.setEnd = true;
        }
            

console.log('End: ' + player.getEnd);

    }

    _start_turn(player){

console.log('El jugador ' + player.getColor + ' va a tirar.');

        let rollP = 0;

        for (let d = 0; d < this._dices.length; d++) {

            rollP += this.throu(this._dices[d]);

        }

        let ficha = prompt('Elija que ficha va a mover:');

console.log('Ha sacado una tirada de ' + rollP);

        this.move_token(player,ficha,rollP);

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

        for (let p = 0; p < this._players.length; p++) {

          if (this._finish_check(this._players[p].getColor)) {

console.log(this._players[p]);

            this._pFinish.push(this._players[p]);

          }
        }

        return this._pFinish;
    }

    /*No lo necesitamos, ya que el orden siempre va va ser el mismo
    getTurnPlayer(){ 
        //return player
    }*/

    startGame(){

        do {
        
            for (let p = 0; p < this._players.length; p++) {

                this._start_turn(this._players[p]);

                this._end_turn(this._players[p]);

            }

        } while (!(this.isFinished()) || this.getWinner().length < this._players.length);

console.log('El ganador es: ' + this._pFinish[0].getColor);
        
    }
}