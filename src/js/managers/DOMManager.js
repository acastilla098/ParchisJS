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

    }

    update(){

    }

    setUp(){

    }

    setUp_game(){

    }

    set_events(){
        
    }

}