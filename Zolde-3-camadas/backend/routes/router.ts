import { Router } from 'express';
import { vehicleRoutes } from './vehicles';
import { parkingRoutes } from './parking';
import { userRoutes } from './users';
const router = Router();

router.use('/api/vehicle', vehicleRoutes);
router.use('/api/parking', parkingRoutes);
router.use('/api/user', userRoutes);

export { router };