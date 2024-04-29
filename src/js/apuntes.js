/**DAVID
 * 10:10 llegada
 * 10:20 salida
 * 10:50 llegada
 * 12:00 salida
 * 13:00 llegada
 * 13:30 salida
 * 14:00 comida
 */
class Player{
    constructor(color,numPieces){
        this.color = color;
        this.numPieces = numPieces;//Number of pieces
        this.homePieces = numPieces;//Number of pieces in home
        this.outPieces = 0;
        this.keepPieces = 0;
    }
    
    get color(){
        return this._color;
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

class Dice{
    constructor(){
        this.number = 1;
    }

    throw() {
        return this.number = parseInt(Math.random()*6+1);
    }

    get number(){
        return this._number;
    }
}



/*if (moves === 5 && pieces[token_id].getOutHome == false) {
    pieces[token_id].setPosition = posinit;
    pieces[token_id].setOutHome = true;
    console.log(pieces[token_id].getPosition);
    return -100;
} else if(pieces[token_id].getOutHome == true){
    pieces[token_id].setPosition = index;
    console.log(pieces[token_id].getPosition);
    return pieces[token_id].getPosition;
}*/

/**Intento de cambiar la clase de las fichas para no poder seleccionarlas si no te toca
 * tokenImg.addEventListener('change', () => {
        tokenImg.className = this._CLASSES.UX_TOKEN;
console.log(tokenImg.className);  
    });
      
    tokenImg.addEventListener('click', () => {
        tokenImg.className = this._CLASSES.UX_TOKEN_DISABLED;
console.log(tokenImg.className);  
    });
 */

/**Bucle para comprobar la casilla
 *
 * MIENTRAS ! Casilla bloqueada && index < movement
 * 
 *      index = 0
 *      index++;
 * 
 * FIN MIENTRAS
 * 
 * RETURN index;
 * 
 * Líneas para llegar a la casilla y ver si hay dos fichas
 * console.log(document.querySelector(`.c${pos}`));
 * if (document.querySelector(`.c${pos}`).childElementCount == 2) 
 *     return false
 * }
 */

/**
 * _update_ui(){
        this._updateScore()

        this._updateTurn()
        
    }
    
    _updateTurn(){
        if (this._turn == this._players.length) {
            this._turn = 0;
        }
        
        this._changeImgTurn(this._players[this._turn]);
        
    }
    _updateScore(){
        if(this.pFinish.length>0){
            for(let i = 0; i<this._players.length-1;i++){
                let change = document.querySelector(`.podiumPlayer${i}`);
                change.textContent = this.pFinish[i].getColor.toUpperCase()
            }
        }
        
    }
 */

//document.getElementById("myDIV").childElementCount; -> Para saber si un eleemnto está vacío o no

/**FUNCIONAMIENTO PSEUDOCÓDIGO
 * -START
 *   MIENTRAS ! Players han terminado {
 *      
 *      START TURNO
 * 
 *      Player n -> tira los dados
 * 
 *      Tirada dados -> devuelve número
 * 
 *      SI Se pueden mover fichas
 * 
 *          Player n -> selecciona fichaPn a mover
 * 
 *      SI NO EXIT;
 * 
 *      MIENTRAS ! fichaPn se puede mover {
 *  
 *          Player n -> selecciona otra ficha
 *      
 *      }
 * 
 *      FichaPn posición = número tirada
 * 
 *      SI FichaPn ha comido
 *      
 *          FichaPn posición += 20
 * 
 *      SI FichaPn entra en casa
 * 
 *          FichaPn+1 posición += 10
 * 
 *      SI fichasPn todas en casa
 * 
 *          Player n -> ha terminado la partida
 * 
 *      SI NO
 * 
 *          Player n -> sigue jugando
 * 
 *      n++;
 * 
 *      FIN TURNO;
 *      
 *   }
 * 
 *    SI Players han terminado
 *      
 *      EXIT;
 *  
 *  -FIN
 */

/*Prueba para comprobar que carga la clase
    let playerTester = new Player('green', 4);
console.log('Jugador creado: ' + playerTester);
console.log('Color: ' + playerTester._color + '; Number of pieces: ' + playerTester._numPieces);*/

/*Prueba para comprobar que llame bien a la clase Dice
    let dice = new Dice();
    console.log('Dado creado, tirada: ' + dice.throw());*/

/*jugadores[numPlayer "= 4"]
r = jugador(..., fichas)
g = jugador
y = jugador
b = jugador

for(i = 0; i < numDados; i++){
        
}

function play(jugadores[],dados[]){

    jugadoresDentro = 0;
    index = 0;
    do{
        tirar(jugador[index], dados)
        comprobarFichasGuardadas(jugador)
        comprobaciones...


        index++;
    }while(jugadoresDentro != 3)

}

comprobarFichasGuardadas(jugador){
    fichasGuyardadas = 4;
    jugadoresDentro++;
}

tirar(jugador,dados){
    pasos = 0;
    avanza = false;
    sale = false;
    for(dados.length){
        pasos += dados[d].getNumero()
    }

    comrpobarSeguir() == true -> avanza
    comprobarSalirCasa() == true -> sale

    if(avanza){
        caminar(pasos)
    }

    if(sale){
        sacarFicha()
    }
}

caminar(pasos){
    mueve la ficha...
}

sacarFicha(){
    posiciona una ficha en la salida...
}

comrpobarSeguir(){
    
    if(puedes 20 || puedes dados){
        if(comprobarComer()){
            caminar()
        }
    }
}

comprobarSalirCasa(){
    ...
    comprobarComcer()
}

comprobarComer(){
    si comes -> caminar(20)

}
*/


/*

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

        turnPlayer.addEventListener('click', () => {

            this._index++;
            if (this._index == 4) {
                this._index = 0;
            }
//console.log('Index: ' + index);
            turnPlayer.src = valuesP[index];

        });
    
}
*/