import express from 'express';
import stolenVehiclesRoutes from './vehicles';

const router = express.Router();

router.use('/stolenVehicles', stolenVehiclesRoutes);

export default router;
