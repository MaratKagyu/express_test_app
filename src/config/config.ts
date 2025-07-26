import dotenv from 'dotenv';

dotenv.config({
  path: ['.env.local', '.env']
});

const config = {
  serverPort: Number(process.env.SERVER_PORT) || 3000,
  appMode: process.env.APP_MODE || 'dev',
};

export default config;
