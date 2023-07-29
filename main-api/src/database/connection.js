import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const DB_HOST = process.env.MONGO_DB_IP || '127.0.0.1:27017';
const DB_URI = `mongodb://${DB_HOST}/BHUTlogs`;

const connection = async () => {
  mongoose.Promise = global.Promise;
  try {
    await mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

    console.log('DB CONNECTION SUCCEEDED');
  } catch (error) {
    console.log('DB CONNECTION FAILED');
    console.log(error);
  }
};

export default connection;
