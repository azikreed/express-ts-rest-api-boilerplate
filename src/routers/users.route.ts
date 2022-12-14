import UsersController from '@controllers/users.controller';
import { AsyncRouter } from 'express-async-router';

const usersRouter = AsyncRouter();

usersRouter.get('/', UsersController.index);
usersRouter.post('/', UsersController.create);
usersRouter.put('/:userId', UsersController.edit);
usersRouter.delete('/:userId', UsersController.destroy);

export default usersRouter;
