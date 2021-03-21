import 'reflect-metadata';
import './env';
import app from './app';
import database from './database';

const PORT = process.env.PORT;

if (!PORT) {
  throw new Error('MISSING PORT ENV');
}

const App = new app();
const Database = new database();

Database.getConnection();
App.start(PORT);
