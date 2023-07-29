import kafka from './client.js';
import {Partitioners} from 'kafkajs';

const producer = kafka.producer({createPartitioner: Partitioners.DefaultPartitioner});

export const queueProducer = async () => {
  await producer.connect();
};
export const sendToQueue = async (payload) => {
  try {
    await producer.send({
      topic: 'car-queue',
      messages: [
        {
          value: JSON.stringify(payload),
        },
      ],
    });
  } catch (error) {
    console.log(error.message);
  }
};
