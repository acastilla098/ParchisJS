import DOMManager from "../managers/DOMManager.js";
import GameManager from "../managers/GameManager.js";
import ConfigComponents from "../settings/ConfigComponents.js";
import ConfigRoute from "../settings/ConfigRoute.js";


function initialize() {

    let config = new ConfigRoute();

    let gameComponents = new ConfigComponents(config);

    let gameManager = new GameManager(gameComponents);

    let dom = new DOMManager(gameManager);

    dom.setUp_game();
    
}


initialize();