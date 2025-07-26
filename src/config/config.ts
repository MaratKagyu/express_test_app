import dotenv from 'dotenv';

dotenv.config({
  path: ['.env.local', '.env']
});

const config = {
  serverPort: Number(process.env.SERVER_PORT) || 3000,
  appMode: process.env.APP_MODE || 'dev',
  database: {
    host: process.env.DATABASE_HOST || '',
    port: Number(process.env.DATABASE_PORT) || 5432,
    name: process.env.DATABASE_NAME || '',
    username: process.env.DATABASE_USERNAME || '',
    password: process.env.DATABASE_PASSWORD || '',
  },
};

export default config;
