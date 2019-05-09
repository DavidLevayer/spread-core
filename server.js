'use strict';

const RabbitmqProducerInfo = require('./libs/model/rabbitmq/rabbitmq-producer-info');
const RabbitmqProducer = require('./libs/util/rabbitmq-producer');
const EventGenerator = require('./libs/core/event-generator');
const Game = require('./libs/core/game');
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

const rabbitmqProducerInfo = new RabbitmqProducerInfo('localhost', 5672, 'spread');
const rabbitmqProducer = new RabbitmqProducer(rabbitmqProducerInfo);

const resourceEvent = new ResourceEvent(rabbitmqProducer);

const game = new Game();
const eventGenerator = new EventGenerator(game, 1000);
eventGenerator.register(resourceEvent);

eventGenerator.start();
setTimeout(() => {
    eventGenerator.stop();
}, 10000);
