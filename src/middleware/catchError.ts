import { Request, Response, NextFunction } from 'express';
import { IError } from '../interface/IError';

// error handling middleware
export const catchErrorMiddleware = (
  error: IError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  error.status = error.status || 'Error';
  error.statusCode = error.statusCode || 500;

  res.status(Number(error.statusCode)).json({
    status: error.status,
    message: error.message,
    location: error.stack,
  });
};
