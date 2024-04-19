export default class Events{

    constructor(configC){

        this._configC = configC;

        this.pFinish = [];

        this._turn = 0;

        this._results = [];

    }

    throu(dice){
        let roll = 0;

        this._configC.getDices[dice].throw();
        roll = this._configC.getDices[dice].getNumber;

        return roll;
    }
    
    move_token(player,token_id, moves){
        let pieces = player.getPieces;

        if (pieces[token_id].isMovementAllowed(moves)){

            if (pieces[token_id].getPosition == player.positionInit) {

                pieces[token_id].move(0);

                player.positionInit ++;

            } else {

                pieces[token_id].move(moves);

            }

        }

console.log('La ficha ' + (parseInt(token_id)+1) + ' se mueve: ' + moves + '; casilla de la ficha: ' + player._pieces[token_id].getPosition);

        return player._pieces[token_id].getPosition;

    }

    _end_turn(player){
        player.setEnd = false;

        let pieces = player.getPieces;

        
console.log('El jugador ' + player.getColor + ' ha terminado.');

        let eq = 0;

        for (let ind = 0; ind < player.getNumPieces; ind++) {

            if (pieces[ind].getPosition == pieces[0].getPosition) {
                eq++;
            }
        }

        if (eq == player.getNumPieces) {
            player.setEnd = true;
        }
            

console.log('End: ' + player.getEnd);

        
        this._turn++;
        

        if( this._turn == this._configC.countPlayers() ){
            this._turn = 0;
        }

    }

    returnDices(){
        return this._results;
    }

    _start_turn(player,ficha){
        let dices = this._configC.getDices;
        this._results = [];

console.log('El jugador ' + player.getColor + ' va a tirar.');

        let rollP = 0;

        for (let d = 0; d < this._configC.countDices(); d++) {

            rollP += this._configC.getDices[d].getNumber;

            /*rollP += this.throu(dices[d]);
            
            this._results.push(this.throu(dices[d]));*/
        }

//console.log('Ha sacado una tirada de ' + rollP);

        //this.move_token(player,ficha,rollP);

        return rollP;
    }

    getRoll(player,ficha){

console.log(this._start_turn(player,ficha));

        return this._start_turn(player,ficha);
    }

    _finish_check(color){

        let players = this._configC.getPlayers

        for (let p = 0; p < this._configC.countPlayers; p++) {

            if (players[p].getColor == color && players[p].getEnd) {

                return true;
            }            
        }

        return false;
    }

    isFinished(){

        let finish = false;

        let players = this._configC.getPlayers;

        players.forEach(player => {

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

        let players = this._configC.getPlayers;

        for (let p = 0; p < players.length; p++) {

          if (this._finish_check(players[p].getColor)) {

//console.log(this._players[p]);

            this.pFinish.push(players[p]);

          }
        }

        this._update_ui();

        return this.pFinish;
    }

    countFinishP(){
        return this.pFinish.length;
    }

    getTurnPlayer(){
        let players = this._configC.getPlayers;

console.log(players[this._turn]);

        return players[this._turn];

    }

    start(){

        //this._update_ui();

        if (!(this.isFinished()) || this.countFinishP() < this._configC.countPlayers()) {
            
            this._start_turn(this.getTurnPlayer());

            this._end_turn(this.getTurnPlayer());

            //this._update_ui();
        }

        return this._turn;
    }
}