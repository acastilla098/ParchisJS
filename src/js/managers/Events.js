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
    
    move_token(player,token_id){

        let pieces = player.getPieces;
        let posinit = player.positionInit;
        
        player.positionInit = posinit;

        let moves = this.getRoll();

        let index = pieces[token_id].isMovementAllowed(moves);

        if (index != 0){
            if (moves === 5 && pieces[token_id].getOutHome == false) {

                pieces[token_id].setPosition = posinit;
                pieces[token_id].setOutHome = true;

                return pieces[token_id].getPosition;

            } else if(pieces[token_id].getOutHome == true){

                pieces[token_id].setPosition = index;

                return pieces[token_id].getPosition;

            }

        }
        

        return 0;

    }

    _end_turn(player){
        player.setEnd = false;

        let pieces = player.getPieces;

        let eq = 0;

        for (let ind = 0; ind < player.getNumPieces; ind++) {

            if (pieces[ind].getPosition == 500) {
                eq++;
            }
        }

        if (eq == player.getNumPieces) {
            player.setEnd = true;
        }
        
        this._turn++;
        

        if( this._turn == this._configC.countPlayers() ){
            this._turn = 0;
        }

    }

    returnDices(){
        return this._results;
    }

    _start_turn(player){

        let rollP = 0;

        for (let d = 0; d < this._configC.countDices(); d++) {

            rollP += this._configC.getDices[d].getNumber;

        }

        return rollP;
    }

    getRoll(){
        return this._start_turn();
    }

    _finish_check(color){

        let players = this._configC.getPlayers

        for (let p = 0; p < this._configC.countPlayers(); p++) {

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

            this.pFinish.push(players[p]);

            }
        }

        return this.pFinish[0];
    }

    countFinishP(){
        return this.pFinish.length;
    }

    getTurnPlayer(){
        let players = this._configC.getPlayers;

        return players[this._turn];

    }

    start(){
        this.pFinish = [];

        if (!(this.isFinished()) || this.countFinishP() == this._configC.countPlayers()) {
            
            this._start_turn(this.getTurnPlayer());

            this._end_turn(this.getTurnPlayer());

        }

        return this._turn;
    }
}