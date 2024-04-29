export default class GameToken{
    constructor(){
        this._position = 0;
        this._outHome = false;
        this._inEnd = false;
        this._finish = false;
    }

    get getInEnd(){
        return this._inEnd;
    }

    /**
     * @param {boolean} end
     */
    set setInEnd(end){

        this._inEnd = end;
        
    }
    
    get getFinish(){
        return this._finish;
    }

    /**
     * @param {boolean} fin
     */
    set setFinish(fin){

        this._finish = fin;
        
    }

    get getPosition(){
        return this._position;
    }

    /**
     * @param {number} box_id
     */
    set setPosition(box_id){

        this._position = box_id;
        
    }
    
    get getOutHome(){
        return this._outHome;
    }

    /**
     * @param {boolean} out
     */
    set setOutHome(out){

        this._outHome = out;
        
    }

    move(increment){

        this._position += increment;

        if (this._position > 68) {
            this._position = 0 + increment;
        }

    }


    isMovementAllowed(casilla){
        if (casilla < 2) {
            return true;
        }

        return false;
    }

}