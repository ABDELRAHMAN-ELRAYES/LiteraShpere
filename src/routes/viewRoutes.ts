import { Router } from 'express';
import { renderSignin } from '../controllers/viewControllers';
const viewRouter = Router();

viewRouter.route('/signin').get(renderSignin);

export default viewRouter;
