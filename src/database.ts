import { createConnection } from 'typeorm';

export default class database {
  async getConnection(): Promise<void> {
    try {
      await createConnection();
      console.log('Connection has been established successfully.');
    } catch (err) {
      console.error('Unable to connect to the database:', err);
    }
  }
}
