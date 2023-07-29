import createCarService from '../services/createCarService.js';

const createCar = async (req, res) => {
  const response = await createCarService(req);
  try {
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

export default createCar;
