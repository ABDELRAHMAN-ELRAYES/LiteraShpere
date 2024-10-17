import { IError } from '../interface/IError';

export class ErrorHandler implements IError {
  status: string ;
  statusCode: number;
  message: string;
  name: string = 'Error';
  constructor(statusCode: number, message: string) {
    this.message = message;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'Fail' : 'Error';
    Error.captureStackTrace(this, this.constructor);
  }
}
