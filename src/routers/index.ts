import PingController from '@controllers/ping.controller';
import { NotFoundException } from '@libs/errors';
import { AsyncRouter } from 'express-async-router';
import { isAuth } from '@libs/is-auth';
import { Request, Response } from 'express';
import authRouter from './auth.route';
import usersRouter from './users.route';
import postsRouter from './posts.route';

const router = AsyncRouter();

// Server Health Check
router.get('/ping', PingController.ping);

router.use('/auth', authRouter);
router.use('/users', isAuth, usersRouter);
router.use('/posts', isAuth, postsRouter);

// 404 Route Not Found
router.all('*', (req: Request, res: Response) => {
  throw new NotFoundException(
    `${req.method} ${req.url} endpoint does not exist`,
  );
});

export default router;
