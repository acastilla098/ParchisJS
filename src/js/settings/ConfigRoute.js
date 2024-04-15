// Clase que gestiona los parametros de la URL

export default class ConfigRoute{

    constructor() {

        this._numPlayers = '';

        this._numDices = '';

        this._tokens = '';

        this._urlParams = this._getUrlParams();

        if (this._urlParams.length = 0) {
            return "error";
        }

        this._init();
    }


    get getNumPlayers() {
        return this._numPlayers;
    }
    

    get getNumDices() {
        return this._numDices;
    }
    

    get getTokens() {
        return this._tokens;
    }


    _getUrlParams () {

        this._queryString = window.location.search;

        /*if () {

            alert('Parametros incorrectos, parametros por defecto');
            this._numPlayers = 4;
            this._numDices = 1;
            this._tokens = 4;
            
        }else{*/
        
        return new URLSearchParams(this._queryString);
        
        //}
        
    }


    _init () {

        this._numPlayers = this._resolvePlayers(this._urlParams);
        this._numDices = this._resolveDices(this._urlParams);
        this._tokens = this._resolveTokens(this._urlParams);

    }

    _resolveDices(_urlParams){

        if (!(this._urlParams.get('diceUnit') == 2 || this._urlParams.get('diceUnit') == 1)) {

            return 1;

        }

        return this._urlParams.get('diceUnit');

    }

    _resolvePlayers(_urlParams){

        if (!(this._urlParams.get('playerUnit') == 4 || this._urlParams.get('playerUnit') == 2)) {

            return 4;

        }

        return this._urlParams.get('playerUnit');

    }

    _resolveTokens(_urlParams){

        if (!(this._urlParams.get('tokenUnit') >= 1 && this._urlParams.get('tokenUnit') < 5)) {

            return 4;

        }

        return this._urlParams.get('tokenUnit')

    }
    
}