export default class Events{

    constructor(players,dices){

        this._players = players;

        this._dices = dices;

        this.pFinish = [];

        this._turn = 0;

        this.pFinish.push(this._players[2]);
    }

    throu(dice,number){
        let roll = 0;

        dice.throw();
        roll = dice.getNumber;

        let change = document.querySelector('.ux-cube'+number)
        change.textContent = roll

        return roll;
    }
    
    move_token(player,token_id, moves){

        if (player._pieces[token_id].isMovementAllowed(moves)){

            if (player._pieces[token_id].getPosition == player.positionInit) {

                player._pieces[token_id].move(0);

                player.positionInit ++;

            } else {

                player._pieces[token_id].move(moves);

            }

        }

console.log('La ficha ' + (parseInt(token_id)+1) + ' se mueve: ' + moves + '; casilla de la ficha: ' + player._pieces[token_id].getPosition);

        return player._pieces[token_id].getPosition;

    }

    _update_ui(){
        this._updateScore()

        this._updateTurn()
        
    }
    
    _updateTurn(){
        if (this._turn == this._players.length) {
            this._turn = 0;
        }
        
        this._changeImgTurn(this._players[this._turn]);
        
    }

    _updateScore(){
        if(this.pFinish.length>0){
            for(let i = 0; i<this._players.length-1;i++){
                let change = document.querySelector(`.podiumPlayer${i}`);

                change.textContent = this.pFinish[i].getColor.toUpperCase()
            }

        }
        
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

        if (eq == player._pieces.length) {
            player.setEnd = true;
        }
            

console.log('End: ' + player.getEnd);

        
        this._turn++;
        

        if( this._turn == this._players.length ){
            this._turn = 0;
        }

    }

    _start_turn(player,ficha){

//console.log('El jugador ' + player.getColor + ' va a tirar.');

        let rollP = 0;

        for (let d = 0; d < this._dices.length; d++) {

            rollP += this.throu(this._dices[d],d);

        }

//console.log('Ha sacado una tirada de ' + rollP);

        //this.move_token(player,ficha,rollP);

        return rollP;
    }

    getRoll(player,ficha){

console.log(this._start_turn(player,ficha));

        return this._start_turn(player,ficha);
    }
        
    _changeImgTurn(player){
        let color = player.getColor;
        let url = `./../assets/icons/user-${color}.png`;

        let change = document.querySelector('.ux-user');

        change.src = url;

    }

    _finish_check(color){

        this._players[0]._end = true;

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

            this.pFinish.push(this._players[p]);

          }
        }

        return this.pFinish;
    }

    getTurnPlayer(){

console.log(this._players[this._turn]);

        return this._players[this._turn];

    }

    start(){
        //this._players[0].setEnd = true;

        if (!(this.isFinished()) || this.getWinner().length < this._players.length) {
            
            this._start_turn(this.getTurnPlayer());

            this._end_turn(this.getTurnPlayer());

            this._update_ui();
        }

//console.log('El ganador es: ' + this.pFinish[0].getColor);

        return this._turn;
    }
}