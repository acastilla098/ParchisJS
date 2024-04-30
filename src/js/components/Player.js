export default class Player {

    constructor(color,numPieces,pieces){
        this._color = color;

        this._numPieces = numPieces;
        this._pieces = pieces;

        this._end = false;

        this.positionInit = 0;
        this.positionEnd = 0;

        this.posInit();
        this.setPos();

        this.posEnd();
    }

    get positionInit(){
        return this.positionInit;
    }
    
    get positionEnd(){
        return this.positionEnd;
    }

    get whatColor(){
        return this._color;
    }

    get numPieces(){
        return this._numPieces;
    }

    get yourPieces(){
        return this._pieces;
    }

    get hasEnd(){
        return this._end;
    }

    /**
     * @param {number} np
     */
    set numPieces(np){
        this._numPieces = np;
    }

    /**
     * @param {array} p
     */
    set yourPieces(p){
        this._pieces = p;
    }

    /**
     * @param {boolean} end
     */
    set hasEnd(end){
        this._end = end;
    }

    setPos(){

        for (let p = 0; p < this._pieces.length; p++) {
            this._pieces[p].setPosition = this.positionInit;
        }

    }

    posInit(){

        switch (this._color) {
            case 'red':
                this.positionInit = 22;
                break;
            case 'yellow':
                this.positionInit = 39;
                break;
            case 'green':
                this.positionInit = 56;
                break;
            case 'blue':
                this.positionInit = 5;
                break;
            default:
                break;
        }
        
    }
    
    posEnd(){

        switch (this._color) {
            case 'red':
                this.positionEnd = 17
                break;
            case 'yellow':
                this.positionEnd = 34;
                break;
            case 'green':
                this.positionEnd = 51;
                break;
            case 'blue':
                this.positionEnd = 68;
                break;
            default:
                break;
        }

    }
}