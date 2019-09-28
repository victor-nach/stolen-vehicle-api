
import express from 'express';
import { getStolenVehicles, createStolenVehicles } from '../../controllers/vehicles';

const router = express.Router();

router.get('/', getStolenVehicles);
router.post('/', createStolenVehicles);

export default router;
