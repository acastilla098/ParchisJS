import DOMManager from "../managers/DOMManager.js";
import Events from "../managers/Events.js";
import ConfigComponents from "../settings/ConfigComponents.js";
import ConfigRoute from "../settings/ConfigRoute.js";


function initialize() {

    let config = new ConfigRoute();

    let gameComponents = new ConfigComponents(config);

    let events = new Events(gameComponents);

    let dom = new DOMManager(events);

    dom.setUp_game();
    
}


initialize();