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