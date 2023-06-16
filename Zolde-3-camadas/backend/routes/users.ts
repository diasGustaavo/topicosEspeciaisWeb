import { Router } from 'express';
import { userController } from '../controllers/UserController';
import { authenticateToken } from '../middlewares/auth';
const userRoutes = Router();

userRoutes.route('/').post(userController.create);
userRoutes.route('/login').post(userController.login);

userRoutes.use(authenticateToken);
userRoutes.route('/').get(userController.getAll);
userRoutes.route('/:email').get(userController.get);

export { userRoutes };