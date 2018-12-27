'use strict';

const AbstractEvent = require('./event/abstract-event');

class EventGenerator {

    /**
     * 
     * @param {number} loopDelay time between two game loop, in milliseconds
     */
    constructor(loopDelay) {
        this.events = [];
        this.loop = null;
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
                    event.trigger();
                }
            })
        }, this.loopDelay);
    }

    stop() {
        clearInterval(this.loop);
    }
}

module.exports = EventGenerator;