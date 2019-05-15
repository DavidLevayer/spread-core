'use strict';

const AbstractCoreConsumer = require('./abstract-core.consumer');
const Game = require('../game');

class BuildingConsumer extends AbstractCoreConsumer {

    constructor(game) {
        super(game, 'building', ['building.build']);
    }

    /**
     * 
     * @param {object} message
     */
    consume(message) {

        let buildingId = message.id;
        let buildingLevel = message.level;

        let building = game.buildingState.buildings.find((building) => building.id === buildingId);

        if (buildingLevel - building.level !== 1) {
            console.error('Cannot update building: invalid level');
        }

        building.level += 1;
        // TODO decremente game resources

        let message = {
            id: building.id,
            name: building.name,
            level: building.level
        };

        this.getRabbitmqProducer().send('building.build', message);
    }
}

module.exports = BuildingConsumer;