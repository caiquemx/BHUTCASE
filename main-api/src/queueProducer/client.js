import {Kafka} from 'kafkajs';

const kafka = new Kafka({
  clientId: 'api',
  brokers: ['localhost:9092'],
});

export default kafka;
