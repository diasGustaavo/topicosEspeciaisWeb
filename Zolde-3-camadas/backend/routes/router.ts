import { Router } from 'express';
import { vehicleRoutes } from './vehicles';
import { parkingRoutes } from './parking';

const router = Router();

router.use('/api/vehicle', vehicleRoutes);
router.use('/api/parking', parkingRoutes);

export { router };