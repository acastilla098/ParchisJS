export default class DOMManager{

    constructor(events){

        this._events = events;

        this._podium = 0;

        this._CLASSES = {

            UX_CONTENT:             'ux-content',
            UX_IMG:                 'ux-img',
            UX_IMGSCORE:            'ux-imgScore',
            UX_IMGANIMATE:          'ux-imgAnimate',
            UX_TOKEN:               'ux-token',
            UX_TOKEN_DISABLED:      'ux-token-disabled',
            UX_TURN:                'ux-turn',
            UX_USER:                'ux-user',
            UX_RETURN:              'ux-return',
            UX_HEAD:                'ux-head',
            UX_BODY:                'ux-body',
            UX_FOOTER:              'ux-footer',
            UX_DICE:                'ux-dice',
            UX_SCORE:               'ux-score',
            UX_PARCHIS:             'ux-parchis',
            UX_GAME:                'ux-game',
            UX_PODIUM:              'ux-podium',
            UX_CUBE:                'ux-cube',
            UX_CUBESDICES:          'ux-cubesdices'
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

        this._divC = document.querySelector(`.${this._CLASSES.UX_CONTENT}`); //0

        this._div = document.querySelector(`.${this._CLASSES.UX_BODY}`); //1

        this._divS = document.querySelector(`.${this._CLASSES.UX_SCORE}`); //2
        this._div.appendChild(this._divS);
        
        this._divG = document.querySelector(`.${this._CLASSES.UX_GAME}`);
        this._div.appendChild(this._divG);
        
        this._divParch = document.querySelector(`.${this._CLASSES.UX_PARCHIS}`);
        this._divG.appendChild(this._divParch);
        
        this._divD = document.querySelector(`.${this._CLASSES.UX_DICE}`); //3
        this._div.appendChild(this._divD);

        this._valuesP = Object.values(this._PLAYERS);
        this._valuesS = Object.values(this._SCORES);

    }

    update(){

    }

    setUp_game(){

        this._createBtnReturn();
        this._createBtnThrow();
        this._createToken();
        this._createTurnPlayer();
        this._createPodium();
        this._createDices();

        window.addEventListener('load', (e) => {

            this._events._turn = 0;
            this._events.start();
            this._changeDices();
            this._events._turn = 0;
            this._podium = 0;

        })
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

        btnT.addEventListener('click', () => {
            this._events.start();
            this._changeImgTurn();
            this._updateScore();
        });

        btnT.addEventListener('click', () => {
            this._changeDices();
            this._updateScore();
        });

    }

    _eventToken(tokenImg,player){

        tokenImg.addEventListener('click', () => {

        let players = this._events._configC.getPlayers;
        let checkTokens = true;
        let pos = 0;
        let posOrigin = player.getPieces[tokenImg.id].getPosition;

            if (player === undefined) {
                player = players[1];
            }

            for (let i = 1;  i <= this._events.getSumResults() ;i++) {

                if(player.getPositionEnd == player.getPieces[tokenImg.id].getPosition || player.getPieces[tokenImg.id].getInEnd == true){

                    console.log("entrando a linea final");
                    this._checkBoxLast(i, this._events.getSumResults(), player, tokenImg);

                    break;
                }

                let j = player.getPieces[tokenImg.id].getPosition + 1;

                if (j > 68) {
                    j = j - 68;
                }

                let x = document.querySelector(`.c${j}`).childElementCount;//Casilla a la que llega

                if(!player.getPieces[tokenImg.id].isMovementAllowed(x)){
                    console.log("movimiento no permitido");
                    checkTokens = false;
                }

                pos = this._events.move_token(player, tokenImg.id);

                if(pos == -100){

                    if(player.getPieces[tokenImg.id].isMovementAllowed(document.querySelector(`.c${player.getPositionInit}`).childElementCount )){

                        document.querySelector(`.c${player.getPositionInit}`).appendChild(tokenImg);

                    }else{

                        player.getPieces[tokenImg.id].setPosition = 0;
                        player.getPieces[tokenImg.id].setOutHome = false;
                        
                    }
                    break
                }
                document.querySelector(`.c${pos}`).appendChild(tokenImg);

            }
            
            if(checkTokens == false){

                console.log("reseteo de ficha");

                player.getPieces[tokenImg.id].setInEnd = false;
                player.getPieces[tokenImg.id].setPosition = posOrigin;

                document.querySelector(`.c${posOrigin}`).appendChild(tokenImg);
            } else {
                let eat = false;

                if (document.querySelector(`.c${player.getPieces[tokenImg.id].getPosition}`).childElementCount == 2) {
                    let casilla = document.querySelector(`.c${player.getPieces[tokenImg.id].getPosition}`);
                    eat = this._eatToken(casilla,tokenImg);
                }

                if (!eat) {
                    //this._changeStyleTokens();
                }
            }
          
        });

        tokenImg.addEventListener('click', () => {this._updateScore();});
        
    }

    _checkBoxLast(value, throu, player, tokenImg){
        let cont = 0;
        let checkTokens = true;
        if(value <= throu && player.getPieces[tokenImg.id].getInEnd == false){

            player.getPieces[tokenImg.id].setInEnd = true;
            player.getPieces[tokenImg.id].setPosition = 0;

        }
        

        for (let i = value ;  i <= throu ;i++) {
            console.log(this._podium);            
            let j = player.getPieces[tokenImg.id].getPosition + 1;

            if (j > 7 && player.getPieces[tokenImg.id].getInEnd == true) {
                let div = document.querySelector(`.diceFinish${player.getColor}`).appendChild(tokenImg);
                player.getPieces[tokenImg.id].setFinish = true;
console.log('Set finis fichas: ' + player.getPieces[tokenImg.id].setFinish);
                div.style.pointerEvents = 'none';
                div.removeAttribute("name");
            }

            let x = 0;
            if (j <= 7) {
                x = document.querySelector(`.${player.getColor}${j}`).childElementCount;   
            }

            if(!player.getPieces[tokenImg.id].isMovementAllowed(x)){
                checkTokens = false;
            }

            cont++;
            //console.log(cont);
        }
        
        
        if(checkTokens==true){

            player.getPieces[tokenImg.id].setPosition = player.getPieces[tokenImg.id].getPosition + cont;
    
            if (player.getPieces[tokenImg.id].getPosition >= 8  && player.getPieces[tokenImg.id].getInEnd == true) {
                let div = document.querySelector(`.diceFinish${player.getColor}`).appendChild(tokenImg);
                div.style.pointerEvents = 'none';
                //player.setEnd = true;
                div.removeAttribute("name");
                player.getPieces[tokenImg.id].setFinish = true;
console.log('Dentro2');
                //player.setEnd = true;
                ///this._updateScore(player);

                /*let pod = this._events.getPodium();

                if (!pod.includes(player) && player.getEnd == true) {
                    this._events.addPFinish(player);   
                }*/
            } else {
                document.querySelector(`.${player.getColor}${player.getPieces[tokenImg.id].getPosition}`).appendChild(tokenImg);
            }
    
           
        } else {
console.log('Dentro');
            //player.setEnd = true;
            //this._updateScore(player);

            /*let pod = this._events.getPodium();

            if (!pod.includes(player)) {
                this._events.addPFinish(player);   
            }*/
        }
    }

    _eatToken(casilla,tokenImg){
        if (casilla.firstElementChild.name != tokenImg.name) {
            let player;

            let tokenEnemy = casilla.firstElementChild;
            let colorToken = tokenEnemy.name;

            switch (colorToken) {
                case 'diceRed':
                    document.querySelector(`.diceRed`).appendChild(tokenEnemy);
                    player = this._events.getPlayerSelected('red');
                    break;
                case 'diceYellow':
                    document.querySelector(`.diceYellow`).appendChild(tokenEnemy);
                    player = this._events.getPlayerSelected('yellow');
                    break;
                case 'diceGreen':
                    document.querySelector(`.diceGreen`).appendChild(tokenEnemy);
                    player = this._events.getPlayerSelected('green');
                    break;
                case 'diceBlue':
                    document.querySelector(`.diceBlue`).appendChild(tokenEnemy);
                    player = this._events.getPlayerSelected('blue');
                    break;
            
                default:
                    break;
            }
            
            player.getPieces[tokenEnemy.id].setPosition = this._events.goHome(player);
            player.getPieces[tokenEnemy.id].setOutHome = false;
            
console.log('Dos fichas diferentes');

            let res = this._events.returnDices();
            for (let r = 0; r < res.length; r++) {
                res[r] = 10;                
            }
            return true;
        }

        return false;
    }

    _changeStyleTokens(){
        let divK = document.querySelectorAll(`.${this._CLASSES.UX_TOKEN}`)
    
        divK.forEach(function (token) {

            token.style.pointerEvents = "none"

        });

    }

    _changeStyleTokensValueColor(value){
        let valuesColors = Object.values(this._COLORS);

        let divT = document.getElementsByName(`${valuesColors[value]}`)

        divT.forEach(function (token) {

            token.style.pointerEvents = "all"

        });
    }

    _createBtnThrow(){

        let thwoum = document.createElement('b');
        thwoum.textContent = '¡Pincha y tira!';
        let m = document.createElement('b');
        m.textContent = '(Cambio de turno automático)';
        
        let btnT = document.createElement('img');

        btnT.alt = "Cubilete";
        btnT.title = "Cubilete";
        btnT.className = this._CLASSES.UX_IMG;
        btnT.src = "./../assets/img/cubilete.webp";
        

        this._divD.appendChild(thwoum);
        this._divD.appendChild(m);
        this._divD.appendChild(btnT);
        this._eventBtnThrow(btnT);

    }

    _createDices(){
        let cube = document.createElement('div');
        cube.className = this._CLASSES.UX_CUBESDICES

        for(let i = 0;i<this._events._configC.countDices();i++){

            let img = document.createElement('div')
            img.className = this._CLASSES.UX_CUBE + i;
            cube.appendChild(img)
        }

        this._divD.appendChild(cube);
    }

    _changeDices(){

        for (let d = 0; d < this._events._configC.countDices(); d++) {
            let roll = this._events.throu(d);
            let change = document.querySelector('.ux-cube' + d);
            change.textContent = roll;
            
        }

    }

    _createToken(){
        let valuesPieces = Object.values(this._PIECES);
        let valuesColors = Object.values(this._COLORS);

        let players = this._events._configC.getPlayers;
        let numPlayers = this._events._configC.countPlayers();

        let numPieces = players[0].getNumPieces;

        for(let j = 0; j < numPieces; j++){
            for(let i = 0; i <  numPlayers; i++){
                if(i == 1 && numPlayers == 2){//Para que al ser dos jugadores coja el rojo y el verde
                    i = 2
                }
                let tokenImg = document.createElement('img');

                tokenImg.className = this._CLASSES.UX_TOKEN;
                tokenImg.id = j;
                tokenImg.alt = "Icono ficha";
                tokenImg.title = 'Ficha';
                tokenImg.name = `${valuesColors[i]}`;
                tokenImg.src = valuesPieces[i];

                if (i == 0) {
                    tokenImg.style.pointerEvents = 'all';
                }

                let divHome = document.querySelector(`.${valuesColors[i]}`);

                divHome.appendChild(tokenImg);

                this._eventToken(tokenImg,players[i]);
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

    _changeImgTurn(){
        this._changeStyleTokens();
        let img = document.querySelector(`.${this._CLASSES.UX_USER}`);

        if (this._events._configC.countPlayers() == 2) {

            let turnos = [0,2];
            this._changeStyleTokensValueColor(turnos[this._events._turn]);
            img.src = this._valuesP[turnos[this._events._turn]];

        } else {

            this._changeStyleTokensValueColor(this._events._turn)
            img.src = this._valuesP[this._events._turn];

        }

    }

    _createTurnPlayer(){

        let divP = document.createElement('div');
        divP.className = this._CLASSES.UX_TURN;

        let p = document.createElement('p');
        p.textContent = 'Turno del jugador';

        divP.appendChild(p);

        divP.appendChild(this._changeTurnPlayer(this._events._turn));

        this._divS.appendChild(divP);
    }

    _createBtnReturn(){
        let divF = document.querySelector(`.${this._CLASSES.UX_FOOTER}`)

        let btnR = document.createElement('button');
        btnR.className = this._CLASSES.UX_RETURN;
        btnR.textContent = 'Return';
        btnR.title = 'Botón de retorno';

        divF.appendChild(btnR);

        this._divC.appendChild(divF);
        this._eventBtnReturn()
    }

    _createPodium(){

        let divP = document.createElement('div');
        divP.className = this._CLASSES.UX_PODIUM;

        let p = document.createElement('p');
        p.textContent = 'Marcador';

        divP.appendChild(p);

        let numPlayers = this._events._configC.countPlayers();

        for(let j = 0; j < numPlayers -1 ; j++){

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

        this._divS.appendChild(divP);
    }

    _updateScore(){

        if(this._events.countFinishP() <= this._events._configC.countPlayers() - 1){
            for(let i = 0; i < this._events.countFinishP();i++){
                let change = document.querySelector(`.podiumPlayer${i}`);
                change.textContent = this._events.pFinish[i].getColor.toUpperCase();
            }
        }
        
    }

}