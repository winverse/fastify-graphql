import 'reflect-metadata';
import './env';
import App from './app';
import { createConnection } from 'typeorm';

const PORT = Number(process.env.PORT);

if (!PORT) {
  throw new Error('MISSING PORT ENV');
}

const app = new App();

createConnection()
  .then(() => {
    app.listen(PORT);
  })
  .catch(err => console.log(err));
