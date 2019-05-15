'use strict';

const AbstractConsumer = require('spread-common/libs/core/consumer/abstract-consumer');
const Game = require('../game');

class AbstractCoreConsumer extends AbstractConsumer {

    /**
     * 
     * @param {Game} game
     * @param {string} queueName
     * @param {array} bindings 
     */
    constructor(game, queueName, bindings) {
        super(queueName, bindings);
        this.game = game;        
    }
}

module.exports = AbstractCoreConsumer;