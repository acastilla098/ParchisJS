
export default class DOMManager{

    constructor(events){

        this._events = events;

        this._ELEMENTS = [];

        this._CLASSES = {

            UX_CONTENT:     'ux-content',
            UX_IMG:         'ux-img',
            UX_IMGSCORE:    'ux-imgScore',
            UX_IMGANIMATE:  'ux-imgAnimate',
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
            UX_GAME:        'ux-game',
            UX_PODIUM:      'ux-podium'
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

        this._SCORES = {
            SCORE_1:            './../assets/img/logo1.png',
            SCORE_2:            './../assets/img/logo2.png',
            SCORE_3:            './../assets/img/logo3.png'
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
        this._valuesS = Object.values(this._SCORES);

    }

    update(){

    }

    /*setUp(){

    }*/

    setUp_game(){
        this._createBtnReturn();
        this._createBtnThrow();
        this._createToken();
        this._createTurnPlayer();
        this._createPodium();
    }

    _eventBtnReturn(){
        
        document.querySelector(`.${this._CLASSES.UX_RETURN}`).addEventListener('click', () => {

            window.location.href = `index.html`;
            
        });

    }

    _eventBtnThrow(btnT){
        btnT.addEventListener('mouseover', () => {

            btnT.className = 'ux-imgAnimate';

        });

        btnT.addEventListener('mouseout', () => {

            btnT.className = 'ux-img';

        });

        btnT.addEventListener('click', () => {this._events.startGame()});
    }

    _eventToken(tokenImg){
        tokenImg.addEventListener('click', () => {});
    }

    _createBtnThrow(){

        let thwoum = document.createElement('b');
        thwoum.textContent = '¡Pincha y tira!';
        
        let btnT = document.createElement('img');

        btnT.alt = "Cubilete";
        btnT.title = "Cubilete";
        btnT.className = this._CLASSES.UX_IMG;
        btnT.src = "./../assets/img/cubilete.webp";
        

        this._ELEMENTS.push(btnT);

        this._ELEMENTS[3].appendChild(thwoum);
        this._ELEMENTS[3].appendChild(btnT);
        this._eventBtnThrow(btnT);

    }

    _createToken(){
        let valuesPieces = Object.values(this._PIECES);
        let valuesColors = Object.values(this._COLORS);

        for(let j = 0; j < this._events._players[0]._pieces.length; j++){
            for(let i = 0; i <  this._events._players.length; i++){
                if(i==1&&this._events._players.length==2){
                    i = 2
                }
                let tokenImg = document.createElement('img');

                tokenImg.className = this._CLASSES.UX_TOKEN;
                tokenImg.id = valuesColors[i] + j;
                tokenImg.alt = "Icono ficha";
                tokenImg.title = 'Ficha';
                tokenImg.src = valuesPieces[i];

                this._ELEMENTS.push(tokenImg);

                let divHome = document.querySelector(`.${valuesColors[i]}`);

                divHome.appendChild(tokenImg);
                
            }
        }

    }

    _changeTurnPlayer(number){
        let turnPlayer = document.createElement('img')

        turnPlayer.alt = "Jugador a tirar";
        turnPlayer.src = this._valuesP[number];
        turnPlayer.className = this._CLASSES.UX_USER
        turnPlayer.title = 'Jugador';

        return turnPlayer;
    }

    _createTurnPlayer(){
        

        let divP = document.createElement('div');
        divP.className = this._CLASSES.UX_TURN;

        let p = document.createElement('p');
        p.textContent = 'Turno del jugador';

        divP.appendChild(p);
        divP.appendChild(this._changeTurnPlayer(0));

        this._ELEMENTS.push(divP);

        this._ELEMENTS[2].appendChild(divP);
    }

    _createBtnReturn(){
        let divF = document.querySelector(`.${this._CLASSES.UX_FOOTER}`)

        let btnR = document.createElement('button');
        btnR.className = this._CLASSES.UX_RETURN;
        btnR.textContent = 'Return';
        btnR.title = 'Botón de retorno';
        this._ELEMENTS.push(btnR);

        this._ELEMENTS.push(divF);

        divF.appendChild(btnR);

        this._ELEMENTS[0].appendChild(divF);
        this._eventBtnReturn()
    }

    _createPodium(){

        let divP = document.createElement('div');
        divP.className = this._CLASSES.UX_PODIUM;

        let p = document.createElement('p');
        p.textContent = 'Marcador';

        divP.appendChild(p);

        for(let j = 0; j<this._events._players.length -1 ;j++){

            let podiumPlayer = document.createElement('img')

            podiumPlayer.alt = `Jugador${j}`;
            podiumPlayer.src = this._valuesS[j];
            podiumPlayer.className = this._CLASSES.UX_IMGSCORE;
            podiumPlayer.title = 'Podio';

            let span = document.createElement('span');
            span.className = `podiumPlayer${j}`;
            span.textContent = '________';

            divP.appendChild(podiumPlayer);
            divP.appendChild(span);
        }

        this._ELEMENTS.push(divP);

        this._ELEMENTS[2].appendChild(divP);
    }

}