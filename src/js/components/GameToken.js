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

        if (this._position > 68) {
            this._position = 0 + increment;
        }

console.log('Incremento: ' + increment);
console.log('Posición: ' + this._position);
    }

    isMovementAllowed(movement){

        let pos = this._position + movement;

        if (pos > 68) {
            pos = 0 + movement;
        }

console.log(document.querySelector(`.c${pos}`));

        if (document.querySelector(`.c${pos}`).childElementCount == 2) {
            return false;
        }

        return true;
    }

}