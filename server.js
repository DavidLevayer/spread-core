'use strict';

const RabbitmqProducerInfo = require('spread-common/libs/model/rabbitmq/rabbitmq-producer-info');
const RabbitmqProducer = require('spread-common/libs/util/rabbitmq/rabbitmq-producer');
const RabbitmqConsumerInfo = require('spread-common/libs/model/rabbitmq/rabbitmq-consumer-info');
const RabbitmqConsumer = require('spread-common/libs/util/rabbitmq/rabbitmq-consumer');
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

const rabbitmqConsumerInfo = new RabbitmqConsumerInfo('localhost', 5672, 'spread');
const rabbitmqConsumer = new RabbitmqConsumer(rabbitmqConsumerInfo);

const buildingConsumer = new BuildingConsumer();

setTimeout(() => {
    rabbitmqConsumer.setConsumer(buildingConsumer);
}, 2000);
