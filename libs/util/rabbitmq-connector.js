'use strict';

const RabbitmqConnectionInfo = require("../model/rabbitmq/rabbitmq-connection-info");

class RabbitmqConnector {

    /**
     * 
     * @param {RabbitmqConnectionInfo} rabbitmqConnectionInfo 
     */
    constructor(rabbitmqConnectionInfo) {
        this.rabbitmqConnectionInfo = rabbitmqConnectionInfo;
    }

    send(routingKey, message) {
        console.log(`Sending message to ${routingKey}: ${message}`);
    }
}

module.exports = RabbitmqConnector;