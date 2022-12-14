import { Request, RequestHandler, Response } from 'express';

import postService from '@services/post.service';

const index: RequestHandler = async (req: Request, res: Response) => {
  const posts = await postService.list();

  res.json({ success: true, posts });
};

const create: RequestHandler = async (req, res) => {
  const post = await postService.create(req.body);
  res.json({ success: true, post });
};

const edit: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'Edit existing Post' });
};

const destroy: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'Deleting Post', params: req.params });
};

export default { index, create, edit, destroy };
