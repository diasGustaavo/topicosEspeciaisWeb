import { Router } from 'express';
import { parkingController } from '../controllers/ParkingController';
const parkingRoutes = Router();

parkingRoutes.route('/').post(parkingController.create);
parkingRoutes.route('/').get(parkingController.get);
parkingRoutes.route('/:parking_id').get(parkingController.get);
parkingRoutes.route('/:parking_id').put(parkingController.update);
parkingRoutes.route('/:parking_id').delete(parkingController.delete);

export { parkingRoutes };