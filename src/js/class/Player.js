
export default class Player {

    constructor(color,numPieces){
        this._color = color;

        this._numPieces = numPieces;//Number of pieces
        this._homePieces = numPieces;//Number of pieces in home
        this._outPieces = 0;//Number of pieces on table
        this._keepPieces = 0;//Number of pieces victorious

        this._end = false;
        this._position = 0;
    }

    get numPieces(){
        return this._numPieces;
    }

    get homePieces(){
        return this._homePieces;
    }

    get outPieces(){
        return this._outPieces;
    }

    get keepPieces(){
        return this._keepPieces;
    }

    set numPieces(np){
        this._numPieces = np;
    }

    set homePieces(hp){
        this._homePieces = hp;
    }
    
    set outPieces(op){
        this._outPieces = op;
    }
    
    set keepPieces(kp){
        this._keepPieces = kp;
    }
}