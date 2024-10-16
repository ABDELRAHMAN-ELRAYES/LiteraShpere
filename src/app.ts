import express, { Request, Response, NextFunction } from 'express';
import {
  bodyParserMiddleware,
  formParser,
  morganMiddleware,
} from './middlewares/middlewares';
import path from 'path';
import userRouter from './routes/userRoutes';


// create express app
const app = express();

// using migglewares
app.use(bodyParserMiddleware);
app.use(formParser);
app.use(morganMiddleware);


// define the template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// define public  static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).render('index');
});


// 
app.use('/users', userRouter);
export default app;
