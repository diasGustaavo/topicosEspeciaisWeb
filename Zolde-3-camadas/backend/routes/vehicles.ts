import { Router } from 'express';
import { vehicleController } from '../controllers/VehicleController';
import { authenticateToken } from '../middlewares/auth';
const vehicleRoutes = Router();

vehicleRoutes.use(authenticateToken);
vehicleRoutes.route('/').post(vehicleController.create);
vehicleRoutes.route('/').get(vehicleController.get);
vehicleRoutes.route('/:vehicle_id').get(vehicleController.get);
vehicleRoutes.route('/:vehicle_id').put(vehicleController.update);
vehicleRoutes.route('/:vehicle_id').delete(vehicleController.delete);

export { vehicleRoutes };