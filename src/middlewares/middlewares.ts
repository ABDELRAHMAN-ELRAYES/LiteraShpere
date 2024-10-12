import morgan from 'morgan';
import express from 'express';
import path from 'path';

export const morganMiddleware = morgan('dev');
export const bodyParserMiddleware = express.json();
export const formParser = express.urlencoded({ extended: true });
