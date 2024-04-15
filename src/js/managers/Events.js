export default class Events{

    constructor(players,dices,tokens){

        this._players = players;

        this._dices = dices;

        this._tokens = tokens;

    }

    throu(){
        
    }
    
    move_token(token_id, moves){
        if (this._tokens[token_id].isMovementAllowed(moves)){
            this._tokens[token_id].move(moves);
        }
    }

    _update_ui(){

    }

    _end_turn(){

    }

    _start_turn(){

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

        return finish;
    }

    getWinner(){
        let pFinish = [];

        for (let p = 0; p< this._players.length; p++) {
          if (this._finish_check(this._players[p])) {

            pFinish.push(this._players[p]);

          }
        }

        return pFinish[0];
    }

    getTurnPlayer(){
        //return player
    }

    startGame(){

    }
}