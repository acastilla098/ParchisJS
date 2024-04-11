
// Clase que gestiona los parametros de la URL
export default class ConfigRoute{

    constructor() {

        this._numPlayers = '';
        this._numDices = '';
        this._tokens = '';

        this._urlParams = this._getUrlParams();

        if (!this._urlParams) {
            return "error";
        }

        this._numPlayers = this._resolvePlayers(this._urlParams);
        this._numDices = this._resolveDices(this._urlParams);
        this._tokens = this._resolveTokens(this._urlParams);

        this._init();
    }


    get numPlayers() {
        return this._numPlayers;
    }
    

    get numDices() {
        return this._numDices;
    }
    

    get tokens() {
        return this._tokens;
    }


    _getUrlParams () {

        this._queryString = window.location.search;

        // Comprobar que this._queryString es OK
        // Si no es OK Return false

        this._urlParams = new URLSearchParams(this._queryString);
    }


    _init () {

        // If Si no se cumple RETURN 
        if ((this._urlParams.get('playerUnit') == 4 || this._urlParams.get('playerUnit') == 2) 
        && (this._urlParams.get('diceUnit') == 2 || this._urlParams.get('diceUnit') == 1)
        && (this._urlParams.get('tokenUnit') >= 1 && this._urlParams.get('tokenUnit') < 5)) {


        } else {
            alert('Parámetros incorrectos -> Parámetros por defecto');
            this._numPlayers = 4;
            this._numDices = 1;
            this._tokens = 4;
        }

        this._numPlayers = this._urlParams.get('playerUnit');
        this._numDices = this._urlParams.get('diceUnit');
        this._tokens = this._urlParams.get('tokenUnit');

        return true;
    }


    
}