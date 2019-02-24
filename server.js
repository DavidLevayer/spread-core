'use strict';

const RabbitmqConnectorInfo = require('./libs/model/rabbitmq/rabbitmq-connection-info');
const RabbitmqConnector = require('./libs/util/rabbitmq-connector');
const EventGenerator = require('./libs/core/event-generator');
const ResourceEvent = require('./libs/core/event/resource.event');

// const express = require('express');

// // Constants
// const PORT = 8080;
// const HOST = '0.0.0.0';

// // App
// const app = express();
// app.get('/', (req, res) => {
//     res.send('Hello world\n');
// });

// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);

const rabbitmqConnectorInfo = new RabbitmqConnectorInfo('localhost', 5672, 'spread');
const rabbitmqConnector = new RabbitmqConnector(rabbitmqConnectorInfo);

const resourceEvent = new ResourceEvent(rabbitmqConnector);

const eventGenerator = new EventGenerator(1000);
eventGenerator.register(resourceEvent);

eventGenerator.start();
setTimeout(() => {
    eventGenerator.stop();
}, 10000);
