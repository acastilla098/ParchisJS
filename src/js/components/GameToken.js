export default class GameToken{
    constructor(){
        this._position = 0;
    }

    get getPosition(){
        return this._position
    }

    /**
     * @param {number} box_id
     */
    set setPosition(box_id){
        this._position = box_id;
    }

    move(increment){
        this._position += increment;
    }

    isMovementAllowed(movement){//boolean
        
    }

}