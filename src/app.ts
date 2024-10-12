import express, { Request, Response, NextFunction } from 'express';
import {
  bodyParserMiddleware,
  formParser,
  morganMiddleware,
} from './middlewares/middlewares';
import path from 'path';
const app = express();
app.use(bodyParserMiddleware);
app.use(formParser);
app.use(morganMiddleware);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).render('index');
});
export default app;
