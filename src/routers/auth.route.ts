import AuthController from '@controllers/auth.controller';
import { AsyncRouter } from 'express-async-router';

const authRouter = AsyncRouter();

authRouter.post('/login', AuthController.login);

export default authRouter;
