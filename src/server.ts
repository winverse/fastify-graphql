import 'reflect-metadata';
import './env';
import app from './app';
import { createConnection } from 'typeorm';

const PORT = Number(process.env.PORT);

if (!PORT) {
  throw new Error('MISSING PORT ENV');
}

createConnection()
  .then(() => {
    app.listen(PORT);
  })
  .catch(err => console.log(err));
