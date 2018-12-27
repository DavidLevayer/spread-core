'use strict';

class RabbitmqConnectionInfo {
    constructor(host, port, exchangeName) {
        this.host = host;
        this.port = port;
        this.exchangeName = exchangeName;
    }
}

module.exports = RabbitmqConnectionInfo;