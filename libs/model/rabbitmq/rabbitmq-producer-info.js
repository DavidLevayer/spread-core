'use strict';

class RabbitmqProducerInfo {

    /**
     * 
     * @param {string} host 
     * @param {number} port 
     * @param {string} exchangeName 
     */
    constructor(host, port, exchangeName) {
        this.host = host;
        this.port = port;
        this.exchangeName = exchangeName;
    }
}

module.exports = RabbitmqProducerInfo;