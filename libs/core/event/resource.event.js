'use strict';

const AbstractEvent = require('./abstract-event');
const Game = require('../game');

class ResourceEvent extends AbstractEvent {

    constructor(rabbitmqProducer) {
        super('resource', rabbitmqProducer, 1);
    }

    /**
     * 
     * @param {Game} game 
     */
    trigger(game) {
        let message = {};
        let resources = message['resources'] = [];
        game.resourceState.resources.forEach((resource) => {
            resource.value += resource.rate;
            message['resources'].push(Object.assign({}, resource));
        });

        this.getRabbitmqProducer().send('resource.tick', message);
    }
}

module.exports = ResourceEvent;