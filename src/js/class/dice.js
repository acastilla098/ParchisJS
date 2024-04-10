export default class Dice{
    constructor(){
        this._number = 1;
    }

    throw() {
        return this._number = parseInt(Math.random()*6+1);
    }

    get number(){
        return this._number;
    }
}