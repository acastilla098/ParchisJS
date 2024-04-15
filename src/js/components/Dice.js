export default class Dice{
    constructor(){
        this._number = 1;
    }

    throw() {
        this._number = parseInt(Math.random()*6+1);
    }

    get getNumber(){
        return this._number;
    }
}