export default class DOMManager{

    constructor(events){

        this._tokenss = 0;

        this._indexP = 0;

        this._index = 0;

        this._events = events;

        this._ELEMENTS = [];

        this._CLASSES = {

            UX_CONTENT:     'ux-content',
            UX_IMG:         'ux-img',
            UX_TOKEN:       'ux-token',
            UX_TURN:        'ux-turn',
            UX_USER:        'ux-user'
        }
    
        this._PIECES = {
    
            RED_PIECE:      './../assets/icons/red_piece_trans.png',
            YELLOW_PIECE:   './../assets/icons/yellow_piece_trans.png',
            GREEN_PIECE:    './../assets/icons/green_piece_trans.png',
            BLUE_PIECE:     './../assets/icons/blue_piece_trans.png'
    
        }

        this._PLAYERS = {

            RED_PLAYER:         './../assets/icons/user-red.png',
            YELLOW_PLAYER:      './../assets/icons/user-yellow.png',
            GREEN_PLAYER:       './../assets/icons/user-green.png',
            BLUE_PLAYER:        './../assets/icons/user-blue.png'

        }

        this._div = document.querySelector(`.${this._CLASSES.UX_CONTENT}`);
        this._ELEMENTS.push(this._div);
console.log(this._div);

        this._valuesP = Object.values(this._PLAYERS);

    }

    set_events(){
        
        document.querySelector(`.${this._CLASSES.UX_IMG}`).addEventListener('click', () => {
console.log(this._index);
            let playerReady = this._events.nextPlayer(this._index);
            
            this._events.throu(playerReady);

            if(this._tokenss < this._events.howMuchPieces() ){
                
                setTimeout(this.createToken(),1000);

            }

            if (this._tokenss == this._events.howMuchPieces()) {

                if(!(this._indexP == 3)){
                    this._indexP++;
                    this._tokenss = 0;
                }
            }

            this._index++;
console.log('Index players: ' + this._index);
console.log('Values players img: ');
console.log(this._valuesP);

            if (this._index == this._events.howMuchPlayers()) {
                this._index = 0;
            }

            document.querySelector(`.${this._CLASSES.UX_USER}`).src = this._valuesP[this._index];
        });


        /*document.querySelector(`.${this._CLASSES.UX_TOKEN}`).addEventListener('click', () => {
console.log('Has hecho click en la ficha.');
            
        })*/

    }

    createBtnThrow(){

        let btnT = document.createElement('img');

        btnT.alt = "Cubilete";
        btnT.title = "Cubilete";
        btnT.className = this._CLASSES.UX_IMG;
        btnT.src = "./../assets/img/cubilete.jpg";
        btnT.width = 200;
        btnT.height = 200;

        this._ELEMENTS.push(btnT);

        this._ELEMENTS[0].appendChild(btnT);
    }

    createToken(){
        let valuesPieces = Object.values(this._PIECES);
        
        let tokenImg = document.createElement('img');

        tokenImg.className = this._CLASSES.UX_TOKEN;
        tokenImg.alt = "Icono ficha";
        tokenImg.src = valuesPieces[this._indexP];
        tokenImg.style.position = 'relative';
        tokenImg.style.left = 0;
        tokenImg.width = 50;
        tokenImg.height = 50;

        this._ELEMENTS.push(tokenImg);

        let movve = 0;

        tokenImg.addEventListener('click', () => {
console.log("movve: " + movve);
            movve = this._events.moveToken();//Esto luego se gestionará con los div de cada fila

            tokenImg.style.left = `${movve}em`;

        })

        this._ELEMENTS[0].appendChild(tokenImg);

        this._tokenss++;

console.log('Tokens out: ' + this._tokenss);
    }

    createTurnPlayer(){
        

        let divP = document.createElement('div');
        divP.className = this._CLASSES.UX_TURN;
        divP.style.width = 200;
        divP.style.height = 200;
        divP.style.display = 'flex';
        divP.style.flexDirection = 'column';

        let p = document.createElement('p');
        p.textContent = 'Turno del jugador';

        let turnPlayer = document.createElement('img')

        this._index = 0;
        turnPlayer.alt = "Jugador a tirar";
        turnPlayer.src = this._valuesP[this._index];
        turnPlayer.className = this._CLASSES.UX_USER
        turnPlayer.title = 'Jugador';
        turnPlayer.width = 50;
        turnPlayer.height = 50;
        turnPlayer.style.position = 'static';


        /*turnPlayer.addEventListener('click', () => {

            this._index++;
            if (this._index == 4) {
                this._index = 0;
            }
//console.log('Index: ' + index);
            turnPlayer.src = valuesP[index];

        });*/

        divP.appendChild(p);
        divP.appendChild(turnPlayer);

        this._ELEMENTS.push(divP);

        this._ELEMENTS[0].appendChild(divP);
    }

}