import { RequestHandler } from 'express';
import userService from '@services/user.service';

const index: RequestHandler = async (req, res) => {
  const users = await userService.list();

  res.json({ success: true, users });
};

const create: RequestHandler = async (req, res) => {
  const user = await userService.create(req.body);

  res.status(201).json({ success: true, data: user });
};

const edit: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'Edit existing User' });
};

const destroy: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'Deleting User', params: req.params });
};

export default { index, create, edit, destroy };
