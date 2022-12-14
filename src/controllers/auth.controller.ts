import { RequestHandler } from 'express';

import authService from '@services/auth.service';

const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  const posts = await authService.login({ email, password });

  res.json({ success: true, posts });
};

export default { login };
