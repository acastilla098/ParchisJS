export default class DOMManager{

    constructor(gameManager){

        this._gameManager = gameManager;

        this._NUMBERS = {
            DOM_LAST_BOX:        68,
            DOM_LIMIT_END:      7,
            DOM_GET_OUT_HOME:     -100,
            DOM_ONE:            1,
            DOM_ZERO:           0,
            DOM_TWO:            2,
            DOM_TEN:            10,
            DOM_NUM_PLAYERS:    this._gameManager._configC.countPlayers(),
        }

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
            UX_CUBE0:                'ux-cube0',
            UX_CUBE1:                'ux-cube1',
            UX_CUBESDICES:          'ux-cubesdices',
            UX_VIDEO:               'ux-video'
        }

        this._SOURCES = {
            SR_VIDEO:       './../assets/videos/gandalf.mp4',
            SR_CUBILETE:    './../assets/img/cubilete.webp',
        }

        this._STRINGS = {
            ST_INDEX:           'index.html',
            ST_WIDTH_VIDEO:     '80',
            ST_TWO:             '2',
            ST_CENTER:          'center',
            ST_THE:             'THE',
            ST_END:             'END',
            ST_SIZE40:          '40Px',
            ST_SIZE60:          '60Px',
            ST_NONE:            'none',
            ST_ALL:             'all',
            ST_NAME:            'name',
            ST_DICE_FINISHED:   'diceFinish',
            ST_RED:             'red',
            ST_YELLOW:          'yellow',
            ST_GREEN:           'green',
            ST_BLUE:            'blue',
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

        this._valuesP = Object.values(this._PLAYERS);
        this._valuesPieces = Object.values(this._PIECES);
        this._valuesS = Object.values(this._SCORES);
        this._valuesColors = Object.values(this._COLORS);

        this._podium = 0;

        this._saves = ['casillas c12','casillas c17','casillas c29','casillas c34','casillas c46','casillas c51','casillas c63','casillas c65'];

        this._divC = document.querySelector(`.${this._CLASSES.UX_CONTENT}`);

        this._div = document.querySelector(`.${this._CLASSES.UX_BODY}`);

        this._divS = document.querySelector(`.${this._CLASSES.UX_SCORE}`);
        this._div.appendChild(this._divS);
        
        this._divG = document.querySelector(`.${this._CLASSES.UX_GAME}`);
        this._div.appendChild(this._divG);
        
        this._divParch = document.querySelector(`.${this._CLASSES.UX_PARCHIS}`);
        this._divG.appendChild(this._divParch);
        
        this._divD = document.querySelector(`.${this._CLASSES.UX_DICE}`);
        this._div.appendChild(this._divD);

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

            this._gameManager._turn = this._NUMBERS.DOM_ZERO;
            this._gameManager.start();
            this._changeDices();
            this._gameManager._turn = this._NUMBERS.DOM_ZERO;
            this._podium = this._NUMBERS.DOM_ZERO;

        })
    }

    _eventBtnReturn(){
        
        document.querySelector(`.${this._CLASSES.UX_RETURN}`).addEventListener('click', () => {

            window.location.href = this._STRINGS.ST_INDEX;
            
        });

    }

    _eventBtnThrow(btnT){
        btnT.addEventListener('mouseover', () => {

            btnT.className = this._CLASSES.UX_IMGANIMATE;

        });

        btnT.addEventListener('mouseout', () => {

            btnT.className = this._CLASSES.UX_IMG;

        });

        btnT.addEventListener('click', () => {
            this._gameManager.start();
            this._changeImgTurn();
            this._updateScore();
        });

        btnT.addEventListener('click', () => {
            this._changeDices();
            this._updateScore();
        });

        btnT.addEventListener('click',() => {

           let player = this._gameManager.getTurnPlayer();

           if (this._gameManager._finish_check(player)) {

                alert(`El jugador ${player.whatColorColor.toUpperCase()} ha terminado, por favor presione al cubilete para pasar el turno.`);

                this._createVideo();

                this._setAttributesDadosFinishPlayer();
                
            }else{
                let video = document.querySelector(`.${this._CLASSES.UX_VIDEO}`);

                if (video != null) {
                    video.remove();
                }
                
            }

        });
    }

    _createVideo(){
        let video = document.createElement('VIDEO');

        video.className = this._CLASSES.UX_VIDEO;
        video.src = this._SOURCES.SR_VIDEO;
        video.autoplay = true;
        video.loop = true;
        video.width = this._STRINGS.ST_WIDTH_VIDEO;

        this._addVideo(video);
    }

    _addVideo(video){
        let div = document.querySelector(`.${this._valuesColors[this._gameManager._turn]}`);
        div.className = this._valuesColors[this._gameManager._turn] + this._STRINGS.ST_TWO;

        div.appendChild(video);
    }

    _setAttributesDadosFinishPlayer(){
        let dado0 = document.querySelector(`.${this._CLASSES.UX_CUBE0}`);
        let dado1 = document.querySelector(`.${this._CLASSES.UX_CUBE1}`);

        dado0.style.alignContent = this._STRINGS.ST_CENTER;
        dado0.textContent = this._STRINGS.ST_THE;
        dado0.style.fontSize = this._STRINGS.ST_SIZE40;
        dado1.style.alignContent = this._STRINGS.ST_CENTER;
        dado1.textContent = this._STRINGS.ST_END;
        dado1.style.fontSize = this._STRINGS.ST_SIZE40;
    }

    _eventToken(tokenImg,player){

        tokenImg.addEventListener('click', () => {

        let players = this._gameManager._configC.givePlayers;
        let checkTokens = true;
        let pos = this._NUMBERS.DOM_ZERO;

        let posOrigin = player.yourPieces[tokenImg.id].whatPosition;

            if (player === undefined) {
                player = players[this._NUMBERS.DOM_ONE];
            }

            for (let i = this._NUMBERS.DOM_ONE;  i <= this._gameManager.getSumResults() ;i++) {

                if(player.givePositionEnd == player.yourPieces[tokenImg.id].whatPosition || player.yourPieces[tokenImg.id].isInEnd){

                    this._checkBoxLast(i, this._gameManager.getSumResults(), player, tokenImg);

                    break;
                }

                let j = player.yourPieces[tokenImg.id].whatPosition + this._NUMBERS.DOM_ONE;

                if (j > this._NUMBERS.DOM_LAST_BOX) {
                    j -= this._NUMBERS.DOM_LAST_BOX;
                }

                //Casilla a la que llega
                let x = document.querySelector(`.c${j}`).childElementCount;

                if(!player.yourPieces[tokenImg.id].isMovementAllowed(x)){

                    checkTokens = false;

                }

                pos = this._gameManager.move_token(player, tokenImg.id);

                if(pos == this._NUMBERS.DOM_GET_OUT_HOME){

                    if(player.yourPieces[tokenImg.id].isMovementAllowed(document.querySelector(`.c${player.givePositionInit}`).childElementCount )){

                        document.querySelector(`.c${player.givePositionInit}`).appendChild(tokenImg);

                    }else{

                        player.yourPieces[tokenImg.id].whatPosition = this._NUMBERS.DOM_ZERO;
                        player.yourPieces[tokenImg.id].isOutHome = false;
                        
                    }
                    break;
                }
                document.querySelector(`.c${pos}`).appendChild(tokenImg);

            }
            
            if(checkTokens == false){

                console.log("reseteo de ficha");

                player.yourPieces[tokenImg.id].isInEnd = false;
                player.yourPieces[tokenImg.id].whatPosition = posOrigin;

                document.querySelector(`.c${posOrigin}`).appendChild(tokenImg);

            } else {
                let eat = false;

                if (document.querySelector(`.c${player.yourPieces[tokenImg.id].whatPosition}`).childElementCount == this._NUMBERS.DOM_TWO) {

                    let casilla = document.querySelector(`.c${player.yourPieces[tokenImg.id].whatPosition}`);
                    eat = this._eatToken(casilla,tokenImg);

                }

                if (!eat) {
                    this._changeStyleTokens();
                }
            }
          
        });

        tokenImg.addEventListener('click', () => {this._updateScore();});
        
    }

    _checkBoxLast(value, throu, player, tokenImg){

        let cont = this._NUMBERS.DOM_ZERO;
        let checkTokens = true;

        if(value <= throu && player.yourPieces[tokenImg.id].getInEnd == false){

            player.yourPieces[tokenImg.id].isInEnd = true;
            player.yourPieces[tokenImg.id].whatPosition = this._NUMBERS.DOM_ZERO;

        }
        

        for (let i = value ;  i <= throu ;i++) {

            let j = player.yourPieces[tokenImg.id].whatPosition + this._NUMBERS.DOM_ONE;

            if (j > this._NUMBERS.DOM_LIMIT_END && player.yourPieces[tokenImg.id].getInEnd) {

                let div = document.querySelector(`.diceFinish${player.getColor}`).appendChild(tokenImg);
                player.yourPieces[tokenImg.id].isFinish = true;

                div.style.pointerEvents = this._STRINGS.ST_NONE;
                div.removeAttribute(this._STRINGS.ST_NAME);

            }

            let x = this._NUMBERS.DOM_ZERO;

            if (j <= this._NUMBERS.DOM_LIMIT_END) {
                x = document.querySelector(`.${player.whatColor}${j}`).childElementCount;   
            }

            if(!player.yourPieces[tokenImg.id].isMovementAllowed(x)){
                checkTokens = false;
            }

            cont++;
        }
        
        
        if(checkTokens==true){

            //token.increasePosition(count);

            player.yourPieces[tokenImg.id].whatPosition = player.yourPieces[tokenImg.id].whatPosition + cont;
    
            if (player.yourPieces[tokenImg.id].whatPosition >= this._NUMBERS.DOM_LIMIT_END + this._NUMBERS.DOM_ONE  && player.yourPieces[tokenImg.id].isInEnd) {

                let div = document.querySelector(`.${this._STRINGS.ST_DICE_FINISHED}${player.getColor}`).appendChild(tokenImg);

                div.style.pointerEvents = this._STRINGS.ST_NONE;
                div.removeAttribute(this._STRINGS.ST_NAME);

                player.yourPieces[tokenImg.id].isFinish = true;

            } else {
                document.querySelector(`.${player.whatColor}${player.yourPieces[tokenImg.id].whatPosition}`).appendChild(tokenImg);
            }
    
           
        } 
    }

    _eatToken(casilla,tokenImg){

        if (this._saves.includes(casilla.className)) {
            return false;
        }
        
        if (casilla.firstElementChild.name != tokenImg.name) {

            let player;

            let tokenEnemy = casilla.firstElementChild;
            let colorToken = tokenEnemy.name;

            switch (colorToken) {
                case this._COLORS.DICE_RED:
                    document.querySelector(`.${this._COLORS.DICE_RED}`).appendChild(tokenEnemy);
                    player = this._gameManager.getPlayerSelected(this._STRINGS.ST_RED);
                    break;
                case this._COLORS.DICE_YELLOW:
                    document.querySelector(`.${this._COLORS.DICE_YELLOW}`).appendChild(tokenEnemy);
                    player = this._gameManager.getPlayerSelected(this._STRINGS.ST_YELLOW);
                    break;
                case this._COLORS.DICE_GREEN:
                    document.querySelector(`.${this._COLORS.DICE_GREEN}`).appendChild(tokenEnemy);
                    player = this._gameManager.getPlayerSelected(this._STRINGS.ST_GREEN);
                    break;
                case this._COLORS.DICE_BLUE:
                    document.querySelector(`.${this._COLORS.DICE_BLUE}`).appendChild(tokenEnemy);
                    player = this._gameManager.getPlayerSelected(this._STRINGS.ST_BLUE);
                    break;
                default:
                    break;
            }
            
            this._gameManager.setPosToken(tokenEnemy.id,this._gameManager.backHome(player));
            this._gameManager.getToken(tokenEnemy.id).isOutHome = false;

            let res = this._gameManager.returnTrhows();

            for (let r = this._NUMBERS.DOM_ZERO; r < res.length; r++) {
                res[r] = this._NUMBERS.DOM_TEN;
            }

            return true;
        }

        return false;
    }

    _changeStyleTokens(){

        let divK = document.querySelectorAll(`.${this._CLASSES.UX_TOKEN}`)
    
        divK.forEach(function (token) {

            token.style.pointerEvents = 'none';

        });

    }

    _changeStyleTokensValueColor(value){

        let divT = document.getElementsByName(`${this._valuesColors[value]}`)

        divT.forEach(function (token) {

            token.style.pointerEvents = 'all';

        });
    }

    _createBtnThrow(){

        let thwoum = document.createElement('b');
        thwoum.textContent = '¡Pincha y tira!';

        let m = document.createElement('b');
        m.textContent = '(Cambio de turno automático)';
        
        let btnT = document.createElement('img');
        this._setAttributesBtnThrow(btnT);

        this._divD.appendChild(thwoum);
        this._divD.appendChild(m);
        this._divD.appendChild(btnT);
        this._eventBtnThrow(btnT);

    }

    _setAttributesBtnThrow(btnT){
        btnT.alt = "Cubilete";
        btnT.title = "Cubilete";
        btnT.className = this._CLASSES.UX_IMG;
        btnT.src = this._SOURCES.SR_CUBILETE;
    }

    _createDices(){
        let cube = document.createElement('div');
        cube.className = this._CLASSES.UX_CUBESDICES

        for(let i = 0;i<this._gameManager._configC.countDices();i++){

            let img = document.createElement('div')
            img.className = this._CLASSES.UX_CUBE + i;
            cube.appendChild(img)
        }

        this._divD.appendChild(cube);
    }

    _changeDices(){

        for (let d = 0; d < this._gameManager._configC.countDices(); d++) {

            let roll = this._gameManager.throu(d);
            let change = document.querySelector(`.${this._CLASSES.UX_CUBE}` + d);
            change.style.fontSize = this._STRINGS.ST_SIZE60;

            change.textContent = roll;
            
        }

    }

    thereAreTwoPlayers(i){
        return i == this._NUMBERS.DOM_ONE && this._NUMBERS.DOM_NUM_PLAYERS == this._NUMBERS.DOM_TWO
    }

    _getNumPieces(){
        let players = this._gameManager._configC.givePlayers;

        return players[0].howMuchPieces;
    }

    _createToken(){

        let players = this._gameManager._configC.givePlayers;

        for(let j = this._NUMBERS.DOM_ZERO; j < this._getNumPieces(); j++){

            for(let i = 0; i <  this._NUMBERS.DOM_NUM_PLAYERS; i++){

                let tokenImg = document.createElement('img');

                if(this.thereAreTwoPlayers(i)){
                    i = this._NUMBERS.DOM_TWO;
                    this._eventToken(tokenImg,players[this._NUMBERS.DOM_ONE]);
                }else{
                    this._eventToken(tokenImg,players[i]);
                }

                this._setAttributesTokenImg(tokenImg,j,i);

                if (i == this._NUMBERS.DOM_ZERO) {
                    tokenImg.style.pointerEvents = this._STRINGS.ST_ALL;
                }

                let divHome = document.querySelector(`.${this._valuesColors[i]}`);

                divHome.appendChild(tokenImg);
            }
        }

    }

    _setAttributesTokenImg(tokenImg,x,y){
        tokenImg.className = this._CLASSES.UX_TOKEN;
        tokenImg.id = x;
        tokenImg.alt = "Icono ficha";
        tokenImg.title = 'Ficha';
        tokenImg.name = `${this._valuesColors[y]}`;
        tokenImg.src = this._valuesPieces[y];
    }

    _changeTurnPlayer(number){

        let turnPlayer = document.createElement('img')

        this._setAttributesTurnPlayer(turnPlayer,number);

        return turnPlayer;
    }

    _setAttributesTurnPlayer(turnPlayer,number){
        turnPlayer.alt = "Jugador a tirar";
        turnPlayer.src = this._valuesP[number];
        turnPlayer.className = this._CLASSES.UX_USER
        turnPlayer.title = 'Jugador';
    }

    _changeImgTurn(){

        this._changeStyleTokens();

        let img = document.querySelector(`.${this._CLASSES.UX_USER}`);

        if (this._NUMBERS.DOM_NUM_PLAYERS == this._NUMBERS.DOM_TWO) {

            let turnos = [this._NUMBERS.DOM_ZERO,this._NUMBERS.DOM_TWO];

            this._changeStyleTokensValueColor(turnos[this._gameManager._turn]);

            img.src = this._valuesP[turnos[this._gameManager._turn]];

        } else {

            this._changeStyleTokensValueColor(this._gameManager._turn)

            img.src = this._valuesP[this._gameManager._turn];

        }

    }

    _createTurnPlayer(){

        let divP = document.createElement('div');
        divP.className = this._CLASSES.UX_TURN;

        let p = document.createElement('p');
        p.textContent = 'Turno del jugador';

        divP.appendChild(p);

        divP.appendChild(this._changeTurnPlayer(this._gameManager._turn));

        this._divS.appendChild(divP);
    }

    _createBtnReturn(){

        let divF = document.querySelector(`.${this._CLASSES.UX_FOOTER}`)
        let btnR = document.createElement('button');

        this._setAttributesBtnReturn(btnR);

        divF.appendChild(btnR);

        this._divC.appendChild(divF);
        this._eventBtnReturn()
    }

    _setAttributesBtnReturn(btnR){
        btnR.className = this._CLASSES.UX_RETURN;
        btnR.textContent = 'Return';
        btnR.title = 'Botón de retorno';
    }

    _createPodium(){

        let divP = document.createElement('div');
        divP.className = this._CLASSES.UX_PODIUM;

        let p = document.createElement('p');
        p.textContent = 'Marcador';

        divP.appendChild(p);

        for(let j = this._NUMBERS.DOM_ZERO; j < this._NUMBERS.DOM_NUM_PLAYERS - this._NUMBERS.DOM_ONE; j++){

            let podiumPlayer = document.createElement('img')

            this._setAttributesPodium(podiumPlayer,j);

            divP.appendChild(podiumPlayer);
            divP.appendChild(this._createSpan(j));
        }

        this._divS.appendChild(divP);
    }

    _setAttributesPodium(podium,j){
        podium.alt = `Jugador${j}`;
        podium.src = this._valuesS[j];
        podium.className = this._CLASSES.UX_IMGSCORE;
        podium.title = 'Podio';
    }

    _createSpan(j){
        let span = document.createElement('span');

        span.className = `podiumPlayer${j}`;
        span.textContent = '________';

        return span;
    }

    _updateScore(){

        if(this._gameManager.countFinishP() <= this._gameManager._configC.countPlayers() - this._NUMBERS.DOM_ONE){

            for(let i = this._NUMBERS.DOM_ZERO; i < this._gameManager.countFinishP();i++){

                let change = document.querySelector(`.podiumPlayer${i}`);

                change.textContent = this._gameManager.pFinish[i].getColor.toUpperCase();

            }
        }
        
    }

}