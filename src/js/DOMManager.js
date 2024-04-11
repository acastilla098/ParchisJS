import Events from "./Events.js";

export default class DOMManager{

    constructor(events){

        this._tokenss = 0;
        this._events = events;
        this._ELEMENTS = [];

        this._CLASSES = {

            UX_CONTENT:     'ux-content',
            UX_IMG:         'ux-img',
            UX_TOKEN:       'ux-token'
        }
    
        this._PIECES = {
    
            RED_PIECE:      './../assets/icons/red_piece_trans.png',
            YELLOW_PIECE:   './../assets/icons/yellow_piece_trans.png',
            GREEN_PIECE:    './../assets/icons/green_piece_trans.png',
            BLUE_PIECE:     './../assets/icons/blue_piece_trans.png'
    
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
        document.querySelector(`.${this._CLASSES.UX_TOKEN}`).addEventListener('click', () => {
    console.log('Has hecho click en la ficha.');
            //document.querySelector(`.${CLASSES.UX_TOKEN}`).style.left = moveToken();
            //console.log(document.querySelector(`.${CLASSES.UX_TOKEN}`));//.left = `${addition}em`;
        })
    }

    createBtnThrow(){
//console.log(CLASSES.UX_CONTENT);
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
        tokenImg.width = 50;
        tokenImg.height = 50;
        this._ELEMENTS.push(tokenImg);
        let movve = 0;

        tokenImg.addEventListener('click', () => {
            movve = this._events.moveToken();
            tokenImg.style.left = `${movve}em`;
//console.log('Has seleccionado la ficha');
        })

        this._ELEMENTS[0].appendChild(tokenImg);
        this._tokenss++;
console.log('Tokens out: ' + this._tokenss);
    }

}