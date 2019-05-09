'use strict';

const RabbitmqProducer = require('../../util/rabbitmq-producer');
const Game = require('../game');

class AbstractEvent {

    /**
     * 
     * @param {string} eventId 
     * @param {RabbitmqProducer} rabbitmqProducer 
     * @param {number} probability 
     */
    constructor(eventId, rabbitmqProducer, probability) {
        this.eventId = eventId;
        this.rabbitmqProducer = rabbitmqProducer;
        this.probability = probability
    }

    getEventId() {
        return this.eventId;
    }

    getRabbitmqProducer() {
        return this.rabbitmqProducer;
    }

    getProbability() {
        return this.probability;
    }

    setProbability(probability) {
        this.probability = probability;
    }

    /**
     * 
     * @param {Game} game 
     */
    trigger(game) {
        throw new Error('trigger method must be overriden');
    }
}

module.exports = AbstractEvent;