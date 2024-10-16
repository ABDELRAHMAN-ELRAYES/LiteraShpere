import app from './app';
import dotenv from 'dotenv';
import { execSync } from 'child_process';
dotenv.config();

const port = process.env.PORT;

// compilee sass files
function compileSass() {
  execSync(`sass src/styles/main.scss src/public/css/main.css`);
}
compileSass();

app.listen(port, () => {
  console.log(`[server] is listening at port ${port}`);
});
