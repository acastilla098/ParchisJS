// Clase que gestiona los parametros de la URL

export default class ConfigRoute{

    constructor() {

        this._NUMBERSPARAMS={
            CR_DICEUNITONE:     1,
            CR_DICEUNITTWO:     2,
            CR_PLAYERUNITTWO:   2,
            CR_PLAYERUNITFOUR:  4,
            CR_TOKENUNITMIN:    1,
            CR_TOKENUNITMAX:    4   
        }

        this._numPlayers = '';

        this._numDices = '';

        this._tokens = '';

        this._urlParams = this._getUrlParams();

        if (this._urlParams.length = 0) {
            return "error";
        }

        this._init();
    }


    get howMuchPlayers() {
        return this._numPlayers;
    }
    

    get howMuchDices() {
        return this._numDices;
    }

    get howMuchTokens() {
        return this._tokens;
    }
    
    //2JP8G8Q29
    get giveTokens() {
        return this._tokens;
    }


    _getUrlParams () {

        this._queryString = window.location.search;
        
        return new URLSearchParams(this._queryString);
    }


    _init () {

        this._numPlayers = this._resolvePlayers(this._urlParams);
        this._numDices = this._resolveDices(this._urlParams);
        this._tokens = this._resolveTokens(this._urlParams);

    }

    _resolveDices(_urlParams){

        if (!(this._urlParams.get('diceUnit') == this._NUMBERSPARAMS.CR_DICEUNITTWO || this._urlParams.get('diceUnit') == this._NUMBERSPARAMS.CR_DICEUNITONE)) {

            return this._NUMBERSPARAMS.CR_DICEUNITONE;

        }

        return this._urlParams.get('diceUnit');

    }

    _resolvePlayers(_urlParams){

        if (!(this._urlParams.get('playerUnit') == this._NUMBERSPARAMS.CR_PLAYERUNITFOUR || this._urlParams.get('playerUnit') == this._NUMBERSPARAMS.CR_PLAYERUNITTWO)) {

            return this._NUMBERSPARAMS.CR_PLAYERUNITFOUR;

        }

        return this._urlParams.get('playerUnit');

    }

    _resolveTokens(_urlParams){

        if (!(this._urlParams.get('tokenUnit') >= this._NUMBERSPARAMS.CR_TOKENUNITMIN && this._urlParams.get('tokenUnit') <= this._NUMBERSPARAMS.CR_TOKENUNITMAX)) {

            return this._NUMBERSPARAMS.CR_TOKENUNITMAX;

        }

        return this._urlParams.get('tokenUnit')

    }
    
}