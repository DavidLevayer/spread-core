'use strict';

const AbstractEvent = require('./abstract-event');

class ResourceEvent extends AbstractEvent {

    constructor(rabbitmqConnector) {
        super('resource', rabbitmqConnector, 1);
        this.resources = [
            'sand',
            'water',
            'food',
            'wood',
        ];
    }

    trigger() {
        let message = {};
        let resources = message['resources'] = {};
        this.resources.forEach((resource) => {
            resources[resource] = 10;
        });
        this.getRabbitmqConnector().send('resource.tick', message);
    }
}

module.exports = ResourceEvent;