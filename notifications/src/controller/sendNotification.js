import {queueConsumer} from '../kafkaQueue/consumer.js';
import {consumeNotification} from '../kafkaQueue/consumer.js';

const sendNotification = async (_req, res) => {
  try {
    await queueConsumer(); // connects consumer
    await consumeNotification(); // send notification to main-api
    res.send();
  } catch (error) {
    console.log(error.message);
  }
};

export default sendNotification;
