'use strict';

var amqp = require('amqplib/callback_api');

const RabbitmqConnectionInfo = require("../model/rabbitmq/rabbitmq-connection-info");

class RabbitmqConnector {

    /**
     * 
     * @param {RabbitmqConnectionInfo} rabbitmqConnectionInfo 
     */
    constructor(rabbitmqConnectionInfo) {
        this.rabbitmqConnectionInfo = rabbitmqConnectionInfo;

        amqp.connect(`amqp://${this.rabbitmqConnectionInfo.host}:${this.rabbitmqConnectionInfo.port}`, (err, connection) => {
            connection.createChannel((err, channel) => {
                channel.assertExchange(this.rabbitmqConnectionInfo.exchangeName, 'topic', { durable: false });
                this.channel = channel;
            })
        });
    }

    /**
     * 
     * @param {string} routingKey 
     * @param {object} message 
     */
    send(routingKey, message) {
        this.channel.publish(this.rabbitmqConnectionInfo.exchangeName, routingKey, Buffer.from(JSON.stringify(message)));
    }
}

module.exports = RabbitmqConnector;