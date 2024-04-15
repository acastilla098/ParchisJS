
export default class Player {

    constructor(color,numPieces,pieces){
        this._color = color;

        this._numPieces = numPieces;
        this._pieces = pieces;

        this._end = false;
    }

    get getColor(){
        return this._color;
    }

    get getNumPieces(){
        return this._numPieces;
    }

    get getPieces(){
        return this._pieces;
    }

    get getEnd(){
        return this._end;
    }

    /**
     * @param {number} np
     */
    set setNumPieces(np){
        this._numPieces = np;
    }

    /**
     * @param {array} p
     */
    set setPieces(p){
        this._pieces = p;
    }

    /**
     * @param {boolean} end
     */
    set setEnd(end){
        this._end = end;
    }

}