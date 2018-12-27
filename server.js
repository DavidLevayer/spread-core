'use strict';

const RabbitmqConnector = require('./libs/util/rabbitmq-connector');
const EventGenerator = require('./libs/core/event-generator');
const HelloWorldEvent = require('./libs/core/event/hello-world-event');

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

const rabbitmqConnector = new RabbitmqConnector();

const helloWorldEvent = new HelloWorldEvent(rabbitmqConnector, 0.5);

const eventGenerator = new EventGenerator(1000);
eventGenerator.register(helloWorldEvent);

eventGenerator.start();
setTimeout(() => {
    eventGenerator.stop();
}, 10000);
