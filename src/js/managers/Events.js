export default class Events{

    constructor(configC){

        this._configC = configC;

        this.pFinish = [];

        this._turn = 0;

        this._results = [];

    }

    goHome(player){
        return  player.getPositionInit;
    }

    getPlayerSelected(color){
        let players = this._configC.getPlayers;
        let player;

        for (let p = 0; p < players.length; p++) {
            if (players[p].getColor == color) {
                player = players[p];
            }
        }

        return player;
    }

    throu(dice){
        let roll = 0;

        this._configC.getDices[dice].throw();
        roll = this._configC.getDices[dice].getNumber;
        this._results.push(roll);

        return roll;
    }

    getPosBefore(player,token_id){
        let pieces = player.getPieces;
        return pieces[token_id].getPosition;
    }

    getSumResults(){
        let suma = 0;

        for (let r = 0; r < this._results.length; r++) {
            suma += this._results[r];            
        }

        return suma;
    }
    
    move_token(player,token_id){

        let pieces = player.getPieces;
        let posinit = player.positionInit;
        //let moves = this.getRoll();
        let nums = this.returnDices();
        let sum = this.getSumResults();

        let index = pieces[token_id].getPosition + 1

        if(index > 68){
            index = index-68;
        }

        for (let d = 0; d < nums.length; d++) {
            if ((nums[d] == 5 || sum == 5) && pieces[token_id].getOutHome == false) {
                pieces[token_id].setPosition = posinit;
                pieces[token_id].setOutHome = true;
                //console.log(pieces[token_id].getPosition);

                return -100;

            } else if(pieces[token_id].getOutHome == true){

                pieces[token_id].setPosition = index;
                //console.log(pieces[token_id].getPosition);

                return pieces[token_id].getPosition;

            }
        }        

    }

    _end_turn(player){
        //player.setEnd = false;

        if (this._allTokensEnd(player)) {
            player.setEnd = true;
        } else {
            player.setEnd = false;
        }
        
        this._turn++;
        

        if( this._turn >= this._configC.countPlayers() ){
            this._turn = 0;
        }

        this._results = [];

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

    addPFinish(player){
        this.pFinish.push(player);
    }

    _allTokensEnd(player){
        let tfin = 0;

        for (let t = 0; t < player.getNumPieces; t++) {
            if (player.getPieces[t].getFinish) {
                tfin++;
            }
        }

        if (tfin == player.getNumPieces) {
            player.setEnd = true;
            return true;
        }

        return false;
    }

    _finish_check(player){

        if (this._allTokensEnd(player)) {
            return true;
        }

        return false;
    }

    isFinished(){

        let finish = 0;

        let players = this._configC.getPlayers;

        players.forEach(player => {

            if (this._finish_check(player)) {

                finish++;
            }
        });

        if (finish == this._configC.countPlayers()) {
            return true;
        }

        return false;
    }

    getWinner(){
        return this.pFinish[0];
    }

    getPodium(){
        return this.pFinish;
    }

    countFinishP(){
        return this.pFinish.length;
    }

    getTurnPlayer(){
        let players = this._configC.getPlayers;

        return players[this._turn];

    }

    start(){
        if (!(this.countFinishP() > 0)) {
            this.pFinish = [];
        }

        if (!(this.isFinished()) || this.countFinishP() == this._configC.countPlayers() - 1) {
            
            this._start_turn(this.getTurnPlayer());

            this._end_turn(this.getTurnPlayer());

            this.getWinner();

        }

        return this._turn;
    }
}