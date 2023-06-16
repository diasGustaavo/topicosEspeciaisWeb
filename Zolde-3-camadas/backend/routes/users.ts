import { Router } from 'express';
import { userController } from '../controllers/UserController';
const userRoutes = Router();

userRoutes.route('/').post(userController.create);
userRoutes.route('/:email').get(userController.get);

export { userRoutes };