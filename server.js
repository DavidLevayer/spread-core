'use strict';

const RabbitmqInfo = require('spread-common/libs/model/rabbitmq/rabbitmq-info');
const RabbitmqManager = require('spread-common/libs/util/rabbitmq/rabbitmq-manager');
const EventGenerator = require('./libs/core/event-generator');
const Game = require('./libs/core/game');
const ResourceEvent = require('./libs/core/event/resource.event');
const BuildingConsumer = require('./libs/core/consumer/building.consumer');

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

const rabbitmqInfo = new RabbitmqInfo('localhost', 5672, 'spread');
const rabbitmqManager = new RabbitmqManager(rabbitmqInfo);

const game = new Game();
const eventGenerator = new EventGenerator(game, 1000);

// Register events
eventGenerator.register(new ResourceEvent(rabbitmqManager.createProducer()));

// Register consumers
rabbitmqManager.addConsumer(new BuildingConsumer());

// Start events cycle
eventGenerator.start();
setTimeout(() => {
    eventGenerator.stop();
}, 10000);