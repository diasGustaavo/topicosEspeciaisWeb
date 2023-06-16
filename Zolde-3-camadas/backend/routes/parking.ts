import { Router } from 'express';
import { parkingController } from '../controllers/ParkingController';
import { authenticateToken } from '../middlewares/auth';
const parkingRoutes = Router();

parkingRoutes.use(authenticateToken);
parkingRoutes.route('/').post(parkingController.create);
parkingRoutes.route('/').get(parkingController.get);
parkingRoutes.route('/:parking_id').get(parkingController.get);
parkingRoutes.route('/:parking_id').put(parkingController.update);
parkingRoutes.route('/:parking_id').delete(parkingController.delete);

export { parkingRoutes };