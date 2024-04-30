export default class GameToken{
    constructor(){
        this._position = 0;
        this._outHome = false;
        this._inEnd = false;
        this._finish = false;
    }

    get isInEnd(){
        return this._inEnd;
    }

    /**
     * @param {boolean} end
     */
    set isInEnd(end){

        this._inEnd = end;
        
    }
    
    get isFinish(){
        return this._finish;
    }

    /**
     * @param {boolean} fin
     */
    set isFinish(fin){

        this._finish = fin;
        
    }

    get whatPosition(){
        return this._position;
    }

    /**
     * @param {number} box_id
     */
    set whatPosition(box_id){

        this._position = box_id;
        
    }
    
    get isOutHome(){
        return this._outHome;
    }

    /**
     * @param {boolean} out
     */
    set isOutHome(out){

        this._outHome = out;
        
    }

    move(increment){

        this._position += increment;

        if (this._position > 68) {
            this._position = 0 + increment;
        }

    }


    isMovementAllowed(casilla){

        return casilla < 2;
    }

}