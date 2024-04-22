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

    isBlockedBox(casilla){

        if (casilla < 2) {
            return true;
        }

        return false;
    }

    isMovementAllowed(movement){
        let pos = this._position + movement;
        let index = this._position;

        for (let m = 0; m < movement; m++) {
            if (index > 68) {
                index = 1;
            }
            
            if (this.isBlockedBox(index)) {
                index = 0;
console.log('Index: ' + index);
                return index;
            }

            index++;
        }

       /* while (!(this.isBlockedBox(index))) {

            if (ind > 68) {
                index = 1;
            }

            index++;
        }*/

        return index;
    }

}