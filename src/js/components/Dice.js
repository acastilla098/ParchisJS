export default class Dice{
    constructor(){

        this._NUMBERS = {
            D_ONE:  1,
            D_SIX:  6
        }

        this._number = this._NUMBERS.D_ONE;
    }

    throw() {
        this._number = parseInt(Math.random()*this._NUMBERS.D_SIX+this._NUMBERS.D_ONE);
    }

    get getNumber(){
        return this._number;
    }
}