export default class GameToken{
    constructor(){
        this._position = 0;
        this._outHome = false;
        this._inEnd = false;
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
    
    get getInEnd(){
        return this._inEnd;
    }

    /**
     * @param {boolean} end
     */
    set setInEnd(end){

        this._inEnd = end;
        
    }

    move(increment){

        this._position += increment;

        if (this._position > 68) {
            this._position = 0 + increment;
        }

console.log('Incremento: ' + increment);
console.log('Posición: ' + this._position);
    }

    isMovementAllowed(casilla){
        if (casilla < 2) {
            return true;
        }

        return false;
    }

}