import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connection = async () => {
  mongoose.Promise = global.Promise;
  try {
    await mongoose.connect(`mongodb://${'127.0.0.1:27017'}/BHUTlogs`);
    console.log('DB CONNECTION SUCCEEDED');
  } catch (error) {
    console.log('DB CONNECTION FAILED');
    console.log(error);
  }
};

export default connection;
