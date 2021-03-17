import path from 'path';
import dotenv from 'dotenv';

const isDev = process.env.NODE_ENV !== 'production';

dotenv.config({
  path: path.resolve(
    process.cwd(),
    isDev ? '.env.development' : '.env.production',
  ),
});
