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

console.log('Incremento: ' + increment);
console.log('Posición: ' + this._position);
    }

    isMovementAllowed(movement){//boolean
        return true;
    }

}