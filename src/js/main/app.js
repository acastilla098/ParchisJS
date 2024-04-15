import DOMManager from "../managers/DOMManager.js";
import Events from "../managers/Events.js";
import GameComponents from "../settings/ConfigComponents.js";
import ConfigRoute from "../settings/ConfigRoute.js";


function initialize() {

    let config = new ConfigRoute();

    let gameComponents = new GameComponents(config);

    let events = new Events(gameComponents.createPlayers(), 
                            gameComponents.createDices(), 
                            gameComponents.createTokens());

    let dom = new DOMManager(events);
    
}


initialize();
