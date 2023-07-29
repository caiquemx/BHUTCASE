import createCarService from '../services/createCarService.js';
import axios from 'axios';

const createCar = async (req, res) => {
  try {
    const response = await createCarService(req);
    await axios.post('http://localhost:3001/api/notification');
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

export default createCar;
