//Clase con los parámetros del index
export default class ConfigRoute{
    constructor(){
        this._queryString = window.location.search;
        this._urlParams = new URLSearchParams(this._queryString);

        if ((this._urlParams.get('playerUnit') == 4 || this._urlParams.get('playerUnit') == 2) 
            && (this._urlParams.get('diceUnit') == 2 || this._urlParams.get('diceUnit') == 1)
            && (this._urlParams.get('tokenUnit') >= 1 && this._urlParams.get('tokenUnit') < 5)) {
            this._numPlayers = this._urlParams.get('playerUnit');
            this._numDices = this._urlParams.get('diceUnit');
            this._tokens = this._urlParams.get('tokenUnit');
        } else {
            alert('Parámetros incorrectos -> Parámetros por defecto');
            this._numPlayers = 4;
            this._numDices = 1;
            this._tokens = 4;
        }
        
    }

    get numPlayers(){
        return this._numPlayers;
    }
    
    get numDices(){
        return this._numDices;
    }
    
    get tokens(){
        return this._tokens;
    }

}