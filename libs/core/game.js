'use strict';

const ResourceState = require('./state/resource.state');
const BuildingState = require('./state/building.state');

class Game {

    constructor() {
        this.resourceState = new ResourceState();
        this.buildingState = new BuildingState();
    }
}

module.exports = Game;