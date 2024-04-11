export default class DOMManager{

    constructor(events){

        this._tokenss = 0;

        this._events = events;

        this._ELEMENTS = [];

        this._CLASSES = {

            UX_CONTENT:     'ux-content',
            UX_IMG:         'ux-img',
            UX_TOKEN:       'ux-token',
            UX_TURN:        'ux-turn'
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

    }

    set_events(){
        
        document.querySelector(`.${this._CLASSES.UX_IMG}`).addEventListener('click', () => {
            this._events.throu();

            if(this._tokenss < 4){

                setTimeout(this.createToken(),1000);

            }

        });


        /*document.querySelector(`.${this._CLASSES.UX_TOKEN}`).addEventListener('click', () => {
console.log('Has hecho click en la ficha.');
            
        })*/

    }

    createBtnThrow(){

        let btnT = document.createElement('img');

        btnT.alt = "Cubilete";
        btnT.className = this._CLASSES.UX_IMG;
        btnT.src = "./../assets/img/cubilete.jpg";
        btnT.width = 200;
        btnT.height = 200;

        this._ELEMENTS.push(btnT);

        this._ELEMENTS[0].appendChild(btnT);
    }

    createToken(){
        let tokenImg = document.createElement('img');

        tokenImg.className = this._CLASSES.UX_TOKEN;
        tokenImg.alt = "Icono ficha";
        tokenImg.src = this._PIECES.RED_PIECE;
        tokenImg.style.position = 'relative';
        tokenImg.style.left = 0;
        tokenImg.width = 50;
        tokenImg.height = 50;

        this._ELEMENTS.push(tokenImg);

        let movve = 0;

        tokenImg.addEventListener('click', () => {
console.log("movve: " + movve);
            movve = this._events.moveToken();

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

        turnPlayer.alt = "Jugador a tirar";
        turnPlayer.src = this._PLAYERS.RED_PLAYER;
        turnPlayer.width = 50;
        turnPlayer.height = 50;
        turnPlayer.style.position = 'static';

        turnPlayer.addEventListener('click', () => {
            turnPlayer.src = this._events.changeTurn(this._PLAYERS,1);
        });

        divP.appendChild(p);
        divP.appendChild(turnPlayer);

        this._ELEMENTS.push(divP);

        this._ELEMENTS[0].appendChild(divP);
    }

}