import express, { Request, Response, NextFunction } from 'express';
import {
  bodyParserMiddleware,
  formParser,
  morganMiddleware,
  cookieParserMiddleware,
} from './middleware/middlewares';
import path from 'path';
import userRouter from './routes/userRoutes';
import { catchErrorMiddleware } from './middleware/catchError';

// create express app
const app = express();

// using middlewares
app.use(bodyParserMiddleware);
app.use(formParser);
app.use(morganMiddleware);
app.use(cookieParserMiddleware);

// define the template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// define public  static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).render('index');
});

app.use('/users', userRouter);

// Global Error Handling 
app.use(catchErrorMiddleware);
export default app;
