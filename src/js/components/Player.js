export default class Player {

    constructor(color,numPieces,pieces){

        this._NUMBERSPOSITIONS = {
            P_POSTINITBLUE:  5,
            P_POSTINITRED:  22,
            P_POSTINITYELLOW:  39,
            P_POSTINITGREEN:  56,

            P_POSTLASTBLUE:  68,
            P_POSTLASTRED:  17,
            P_POSTLASTYELLOW:  34,
            P_POSTLASTGREEN:  51,
        }
        
        this._COLORSPLAYERS = {
            P_COLORRED: 'red',
            P_COLORBLUE: 'blue',
            P_COLORGREEN: 'green',
            P_COLORYELLOW: 'yellow',
        }

        this._NUMBER = {
            P_ZERO: 0   
        }

        this._color = color;

        this._numPieces = numPieces;
        this._pieces = pieces;

        this._end = false;

        this.positionInit = this._NUMBER.P_ZERO;
        this.positionEnd = this._NUMBER.P_ZERO;

        this.posInit();
        this.setPos();

        this.posEnd();

    }

    get givePositionInit(){
        return this.positionInit;
    }
    
    get givePositionEnd(){
        return this.positionEnd;
    }

    get whatColor(){
        return this._color;
    }

    get howMuchPieces(){
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
    set howMuchPieces(np){
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

        for (let p = this._NUMBER.P_ZERO; p < this._pieces.length; p++) {
            this._pieces[p].whatPosition = this.positionInit;
        }

    }

    posInit(){

        switch (this._color) {
            case this._COLORSPLAYERS.P_COLORRED:
                this.positionInit = this._NUMBERSPOSITIONS.P_POSTINITRED;
                break;
            case this._COLORSPLAYERS.P_COLORYELLOW:
                this.positionInit = this._NUMBERSPOSITIONS.P_POSTINITYELLOW;
                break;
            case this._COLORSPLAYERS.P_COLORGREEN:
                this.positionInit = this._NUMBERSPOSITIONS.P_POSTINITGREEN;
                break;
            case this._COLORSPLAYERS.P_COLORBLUE:
                this.positionInit = this._NUMBERSPOSITIONS.P_POSTINITBLUE;
                break;
            default:
                break;
        }
        
    }
    
    posEnd(){

        switch (this._color) {
            case this._COLORSPLAYERS.P_COLORRED:
                this.positionEnd = this._NUMBERSPOSITIONS.P_POSTLASTRED;
                break;
            case this._COLORSPLAYERS.P_COLORYELLOW:
                this.positionEnd = this._NUMBERSPOSITIONS.P_POSTLASTYELLOW;
                break;
            case this._COLORSPLAYERS.P_COLORGREEN:
                this.positionEnd = this._NUMBERSPOSITIONS.P_POSTLASTGREEN;
                break;
            case this._COLORSPLAYERS.P_COLORBLUE:
                this.positionEnd = this._NUMBERSPOSITIONS.P_POSTLASTBLUE;
                break;
            default:
                break;
        }

    }
}