import { players, dices } from "./data.js";


export function throu(){
    for (let p = 0; p < players.length; p++) {
        for (let d = 0; d < dices.length; d++) {
            console.log(`Player ${players[p]._color} thrown the dice ${d+1}: ${dices[d].throw()}`);            
        }
    }

//console.log(players);
//console.log(dices);
}