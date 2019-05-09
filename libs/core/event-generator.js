'use strict';

const AbstractEvent = require('./event/abstract-event');
const Game = require('../core/game');

class EventGenerator {

    /**
     * 
     * @param {Game} game
     * @param {number} loopDelay time between two game loop, in milliseconds
     */
    constructor(game, loopDelay) {
        this.events = [];
        this.loop = null;
        this.game = game;
        this.loopDelay = loopDelay;
    }

    /**
     * 
     * @param {AbstractEvent} event event to register in the game loop
     */
    register(event) {
        this.events.push(event);
    }

    /**
     * 
     * @param {string} eventId event id of the event to remove from the loop
     */
    unregister(eventId) {
        this.events = this.events.filter(event => event.getEventId() !== eventId);
    }

    start() {
        this.loop = setInterval(() => {
            this.events.forEach((event) => {
                const randomNumber = Math.random();
                if (randomNumber < event.probability) {
                    event.trigger(this.game);
                }
            })
        }, this.loopDelay);
    }

    stop() {
        clearInterval(this.loop);
    }
}

module.exports = EventGenerator;