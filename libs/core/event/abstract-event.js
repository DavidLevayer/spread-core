'use strict';

const RabbitmqConnector = require('../../util/rabbitmq-connector');

class AbstractEvent {

    /**
     * 
     * @param {string} eventId 
     * @param {RabbitmqConnector} rabbitmqConnector 
     * @param {number} probability 
     */
    constructor(eventId, rabbitmqConnector, probability) {
        this.eventId = eventId;
        this.rabbitmqConnector = rabbitmqConnector;
        this.probability = probability
    }

    getEventId() {
        return this.eventId;
    }

    getRabbitmqConnector() {
        return this.rabbitmqConnector;
    }

    getProbability() {
        return this.probability;
    }

    setProbability(probability) {
        this.probability = probability;
    }

    trigger() {
        throw new Error('trigger method must be overriden');
    }
}

module.exports = AbstractEvent;