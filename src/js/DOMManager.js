//export default class DOMManager{
import { throu } from "./Events.js";

    export let ELEMENTS = [];

    const CLASSES = {

        UX_CONTENT:     'ux-content',
        UX_IMG:         'ux-img'
    }


    export function set_events(){
        document.querySelector(`.${CLASSES.UX_IMG}`).addEventListener('click', () => {throu()});
    }

    export function createBtnThrow(){
console.log(CLASSES.UX_CONTENT);
        let div = document.querySelector(`.${CLASSES.UX_CONTENT}`);
        ELEMENTS.push(div);
console.log(div);
        let btnT = document.createElement('img');
        btnT.alt = "Cubilete";
        btnT.className = CLASSES.UX_IMG;
        btnT.src = "./../assets/img/cubilete.jpg";
        btnT.width = 200;
        btnT.height = 200;
        ELEMENTS.push(btnT);

        div.appendChild(btnT);
    }