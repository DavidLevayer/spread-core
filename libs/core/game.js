'use strict';

const ResourceState = require('./state/resource.state');

class Game {

    constructor() {
        this.resourceState = new ResourceState();
    }
}

module.exports = Game;