'use strict';

const AbstractEvent = require('./abstract-event');

class HelloWorldEvent extends AbstractEvent {

    constructor(rabbitmqConnector, probability) {
        super('HelloWorldEvent', rabbitmqConnector, probability);
    }

    trigger() {
        this.getRabbitmqConnector().send('hello.world', '{ "hello": "world" }');
    }
}

module.exports = HelloWorldEvent;