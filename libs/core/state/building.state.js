'use strict';

const Building = require('../../model/building');

class BuildingState {

    constructor() {
        this.buildings = [];
        this.buildings.push(new Building(
            'a79ce95e-1b3f-45b2-934c-8f279c1a7252',
            'Stone pit',
            'A large facility specilized in sand extraction and packagement. Required in a large set of basic construction activities.',
            1,
            []
        ));
    }

    /**
     * 
     * @param {Building} building 
     */
    addBuilding(building) {
        this.buildings.push(building);
    }
}

module.exports = BuildingState;