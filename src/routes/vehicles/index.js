
import express from 'express';
import { getStolenVehicles } from '../../controllers/vehicles';

const router = express.Router();

router.get('/', getStolenVehicles);

export default router;
