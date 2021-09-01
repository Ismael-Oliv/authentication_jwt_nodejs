import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import Auth from '../../../../../config/auth';

interface IHeaders {
  token: string;
}

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const { token } = request.headers;

  if (!token) {
    throw new Error('Token not found');
  }

  const decoded = verify(token as string, Auth.jwt.secret);
  const { sub } = decoded as ITokenPayload;

  request.body.user = {
    id: sub,
  };

  return next();
}
