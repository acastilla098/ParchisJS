export default class DOMManager{

    constructor(events){

        this._events = events;

        this._ELEMENTS = [];

        this._CLASSES = {

            UX_CONTENT:     'ux-content',
            UX_IMG:         'ux-img',
            UX_TOKEN:       'ux-token',
            UX_TURN:        'ux-turn',
            UX_USER:        'ux-user',
            UX_RETURN:      'ux-return',
            UX_HEAD:        'ux-head',
            UX_BODY:        'ux-body',
            UX_FOOTER:      'ux-footer',
            UX_DICE:        'ux-dice',
            UX_SCORE:       'ux-score',
            UX_PARCHIS:     'ux-parchis',
            UX_GAME:        'ux-game'
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

        this._COLORS = {

            DICE_RED:        'diceRed',
            DICE_YELLOW:     'diceYellow',
            DICE_GREEN:      'diceGreen',
            DICE_BLUE:       'diceBlue'

        }

        this._divC = document.querySelector(`.${this._CLASSES.UX_CONTENT}`);
        this._ELEMENTS.push(this._divC);

        this._div = document.querySelector(`.${this._CLASSES.UX_BODY}`);
        this._ELEMENTS.push(this._div);

        this._divS = document.querySelector(`.${this._CLASSES.UX_SCORE}`);
        this._ELEMENTS.push(this._divS);
        this._div.appendChild(this._divS);
        
        this._divG = document.querySelector(`.${this._CLASSES.UX_GAME}`);
        this._div.appendChild(this._divG);
        
        this._divParch = document.querySelector(`.${this._CLASSES.UX_PARCHIS}`);
        this._divG.appendChild(this._divParch);
        
        this._divD = document.querySelector(`.${this._CLASSES.UX_DICE}`);
        this._ELEMENTS.push(this._divD);
        this._div.appendChild(this._divD);

        this._valuesP = Object.values(this._PLAYERS);
    }

    update(){

    }

    /*setUp(){

    }*/

    setUp_game(){
        this._createBtnThrow();
        this._createToken();
        this._createTurnPlayer()

    }

    _set_events(){
        
    }

    _createBtnThrow(){

        let thwoum = document.createElement('b');
        thwoum.textContent = '¡Pincha y tira!';
        
        let btnT = document.createElement('img');

        btnT.alt = "Cubilete";
        btnT.title = "Cubilete";
        btnT.className = this._CLASSES.UX_IMG;
        btnT.src = "./../assets/img/cubilete.webp";
        btnT.width = 200;
        btnT.height = 100;

        this._ELEMENTS.push(btnT);

        this._ELEMENTS[3].appendChild(thwoum);
        this._ELEMENTS[3].appendChild(btnT);
    }
    
    _createToken(){
        let valuesPieces = Object.values(this._PIECES);
        let valuesColors = Object.values(this._COLORS);
        
        let tokenImg = document.createElement('img');

        tokenImg.className = this._CLASSES.UX_TOKEN;
        tokenImg.alt = "Icono ficha";
        tokenImg.src = valuesPieces[0];
        tokenImg.style.position = 'relative';
        tokenImg.style.left = 0;
        tokenImg.width = 20;
        tokenImg.height = 20;

        this._ELEMENTS.push(tokenImg);

        let divHome = document.querySelector(`.${valuesColors[0]}`);

        divHome.appendChild(tokenImg);

    }

    _createTurnPlayer(){
        

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
        turnPlayer.src = this._valuesP[0];
        turnPlayer.className = this._CLASSES.UX_USER
        turnPlayer.title = 'Jugador';
        turnPlayer.width = 50;
        turnPlayer.height = 50;
        turnPlayer.style.position = 'static';

        divP.appendChild(p);
        divP.appendChild(turnPlayer);

        this._ELEMENTS.push(divP);

        this._ELEMENTS[2].appendChild(divP);
    }

    createBtnReturn(){
        let divF = document.querySelector(`.${this._CLASSES.UX_FOOTER}`)

        let btnR = document.createElement('button');
        btnR.className = this._CLASSES.UX_RETURN;
        btnR.textContent = 'Return';
        this._ELEMENTS.push(btnR);

        this._ELEMENTS.push(divF);

        divF.appendChild(btnR);

        this._ELEMENTS[0].appendChild(divF);
    }
}