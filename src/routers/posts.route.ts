import PostsController from '@controllers/posts.controller';
import { AsyncRouter } from 'express-async-router';

const postsRouter = AsyncRouter();

postsRouter.get('/', PostsController.index);
postsRouter.post('/', PostsController.create);
postsRouter.put('/:postId', PostsController.edit);
postsRouter.delete('/:postId', PostsController.destroy);

export default postsRouter;
