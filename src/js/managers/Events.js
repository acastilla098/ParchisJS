export default class Events{

    constructor(players,dices){

        this._players = players;

        this._dices = dices;

        this.pFinish = [];

        this._turn = 0;

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

                player._pieces[token_id].move(moves);

        }

//console.log('La ficha ' + (parseInt(token_id)+1) + ' se mueve: ' + moves + '; casilla de la ficha: ' + player._pieces[token_id].getPosition);

        return player._pieces[token_id].getPosition;

    }

    _update_ui(){

        if (this._turn+1 == 4) {
            this._turn = 0;
        }

        this._changeImgTurn(this._players[this._turn+1]);   

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

    _start_turn(player){

        if (player._pieces[token_id].getPosition == player.positionInit-1) {
            player._pieces[token_id].move(0);
        }

console.log('El jugador ' + player.getColor + ' va a tirar.');

        /*let color = '';
        color = player.getColor;

        color = color + '_PLAYER';
        color = color.toUpperCase();*/

        let rollP = 0;

        for (let d = 0; d < this._dices.length; d++) {

            rollP += this.throu(this._dices[d],d);

        }

        let ficha = prompt('Elija que ficha va a mover:');//La fichas van de 0 a length - 1

console.log('Ha sacado una tirada de ' + rollP);

        this.move_token(player,ficha,rollP);

    }
        
    _changeImgTurn(player){
        let color = player.getColor
        let url = `./../assets/icons/user-${color}.png`
        let change = document.querySelector('.ux-user')
        change.src = url;
        console.log("cambio imagen")
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

            this.pFinish.push(this._players[p]);

          }
        }

        return this.pFinish;
    }

    getTurnPlayer(){
        
console.log(this._players[this._turn]);

        return this._players[this._turn];
    }

    startGame(){

        if (!(this.isFinished()) || this.getWinner().length < this._players.length) {
            this._update_ui();
            
            this._start_turn(this.getTurnPlayer());

            this._end_turn(this.getTurnPlayer());
        }

console.log('El ganador es: ' + this.pFinish[0].getColor);

        return this._turn;
    }
}