import DOMManager from "./DOMManager.js";
import Events from "./Events.js";
import GameComponents from "./GameComponents.js";
import ConfigRoute from "./class/ConfigRoute.js";


function initialize() {

    let config = new ConfigRoute();

    let gameComponents = new GameComponents(config);

    let events = new Events(gameComponents.createPlayers(), gameComponents.createDices());

    let dom = new DOMManager(events);

    dom.createBtnThrow();
    dom.set_events();
    dom.createTurnPlayer();
}


initialize();
