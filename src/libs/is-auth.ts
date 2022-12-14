import { NextFunction, Request, Response } from 'express';
import { UnauthorizedException } from './errors';
import { verifyToken } from './jwt';

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.replace('Bearer ', '');
  const payload = verifyToken(token);

  if (!token || !payload) throw new UnauthorizedException('Invalid Token');

  next();
};
