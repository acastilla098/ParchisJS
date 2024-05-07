export default class Events{

    constructor(configC){

        this._configC = configC;

        this._CHANGEABLES = {
            GM_PLAYERS: this._configC.givePlayers,
            GM_COUNTPLAYERS:    this._configC.countPlayers()
        }

        this._NUMBERS = {
            GM_LASTBOX: 68,
            GM_ONE:   1, 
            GM_DICEOUTHOME:   5,
            GM_GETOUTHOME: -100,
            GM_ZERO:    0
        }

        this.pFinish = [];

        this.finish = 0;

        this._turn = 0;

        this._results = [];

    }

    getTurnPieces(){
        return this.getTurnPlayer().yourPieces;
    }

    getToken(token_id){
        let pieces = this.getTurnPieces();

        return pieces[token_id];
    }
    
    getPosToken(token_id){
        let pieces = this.getTurnPlayer().yourPieces;

        return pieces[token_id].whatPosition;
    }

    setPosToken(token_id, pos){
        let token = this.getToken(token_id);
        token.whatPosition = pos;
    }

    backHome(player){
        return  player.givePositionInit;
    }

    getPlayerSelected(color){

        let player;

        for (let p = this._NUMBERS.GM_ZERO; p < this._CHANGEABLES.GM_COUNTPLAYERS; p++) {

            if (this._CHANGEABLES.GM_PLAYERS[p].whatColor == color) {
                player = this._CHANGEABLES.GM_PLAYERS[p];
            }

        }

        return player;
    }

    getDices(){
        return this._configC.giveDices;
    }
    
    getThisDice(d){
        let dices = this.getDices();

        return dices[d];
    }

    throu(dice){
        let roll = this._NUMBERS.GM_ZERO;

        this.getThisDice(dice).throw();

        roll = this.getThisDice(dice).getNumber;

        this._results.push(roll);

        return roll;
    }

    getPosBefore(token_id){

        return this.getToken(token_id).whatPosition;
    }

    getSumResults(){
        let suma = this._NUMBERS.GM_ZERO;

        for (let r = this._NUMBERS.GM_ZERO; r < this.returnQuantityThrows(); r++) {

            suma += this.returnThisThrows(r);

        }

        return suma;
    }

    arriveBox(token_id){
        return this.getPosToken(token_id) + this._NUMBERS.GM_ONE;
    }
    
    canExitHomeNotOutHome(dice, sum, token){
        return (dice == this._NUMBERS.GM_DICEOUTHOME || sum == this._NUMBERS.GM_DICEOUTHOME) && !(this.getToken(token).isOutHome);
    }

    setExitCase(token_id,pos){
        let token = this.getToken(token_id);

        this.setPosToken(token_id,pos);
        token.isOutHome = true;
    }

    checkIfOutHomeOrMove(posinit, sum, token, index, d){
        if (this.canExitHomeNotOutHome(d,sum,token)) {

            this.setExitCase(token,posinit);

            return this._NUMBERS.GM_GETOUTHOME;

        } else if(this.getToken(token).isOutHome){

            this.setPosToken(token,index);

            return this.getPosToken(token);
        }
    }

    move_token(player,token_id){

        let posinit = player.givePositionInit;

        let nums = this.returnThrows();
        let sum = this.getSumResults();

        let index = this.arriveBox(token_id);

        if(index > this._NUMBERS.GM_LASTBOX){
            index -= this._NUMBERS.GM_LASTBOX;
        }

        for (let d = this._NUMBERS.GM_ZERO; d < nums.length; d++) {

            let num = this.checkIfOutHomeOrMove(posinit, sum, token_id, index, nums[d]);

            if (num != undefined) {
                return num;
            }
        }
    }

    _end_turn(player){

        if (this._allTokensEnd(player)) {
            player.hasEnd = true;
        } else {
            player.hasEnd = false;
        }

        this._turn++;

        if( this._turn >= this._CHANGEABLES.GM_COUNTPLAYERS){
            this._turn = this._NUMBERS.GM_ZERO;
        }

        this._results = [];

    }

    returnThrows(){
        return this._results;
    }
    
    returnQuantityThrows(){
        return this._results.length;
    }

    returnThisThrows(x){
        return this._results[x];
    }

    _start_turn(player){

        let rollP = this._NUMBERS.GM_ZERO;

        for (let d = this._NUMBERS.GM_ZERO; d < this._configC.countDices(); d++) {

            rollP += this.getThisDice(d).getNumber;

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
        let tfin = this._NUMBERS.GM_ZERO;

        for (let t = this._NUMBERS.GM_ZERO; t < player.howMuchPieces; t++) {

            if (player.yourPieces[t].isFinish == true) {
                tfin++;
            }
        }

        if (tfin == player.howMuchPieces) {

            player.hasEnd = true;
            return true;
        }

        return false;
    }

    _finish_check(player){

        if (this._allTokensEnd(player) && player.hasEnd) {

            if (!(this.pFinish.includes(player))) {
                this.addPFinish(player);
            }

            return true;
        }

        return false;
    }

    isFinished(){
        let finish = this._NUMBERS.GM_ZERO;

        for (let p = this._NUMBERS.GM_ZERO; p < this._CHANGEABLES.GM_COUNTPLAYERS; p++) {

            if (this._finish_check(this._CHANGEABLES.GM_PLAYERS[p])) {

                finish++;

            }

        }

        if (finish == this._CHANGEABLES.GM_COUNTPLAYERS - this._NUMBERS.GM_ONE) {

            return true;
        }

        return false;
    }

    getWinner(){
        return this.pFinish[this._NUMBERS.GM_ZERO];
    }

    getPodium(){
        return this.pFinish;
    }

    countFinishP(){
        return this.pFinish.length;
    }

    getTurnPlayer(){
        return this._CHANGEABLES.GM_PLAYERS[this._turn];
    }

    winnersFull(){
        return this.countFinishP() == this._configC.countPlayers() - this._NUMBERS.GM_ONE;
    }

    _seeChanceOfMoveToken(){
        let player = this.getTurnPlayer();
        let canMove = 0;

        for (let index = 0; index < player.howMuchPieces; index++) {
            if (player.yourPieces[index]._canMove && this.getPosToken(index) != player.givePositionInit) {
                console.log('Se puede mover la ficha ' + index);
                canMove++;
            }else{
                console.log('NO se puede mover la ficha ' + index);
            }
        }

        return canMove;
    }

    start(){

        if (!(this.isFinished()) || !(this.winnersFull())) {
            
            this._start_turn(this.getTurnPlayer());

            this._end_turn(this.getTurnPlayer());

            this.getWinner();

        }
    }

}