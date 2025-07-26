import express from "express";
import config from "./config/config";
import {AppDataSource} from "./config/data-source";

const app = express();

app.get('/', async (req, res) => {
  res.send(`Hello World! Running as ${config.appMode}`);
});

Promise.all([
  AppDataSource.initialize(),
]).then(() => {
  app.listen(config.serverPort, () => {
    // Run when the server is ready
    console.log(`Listening on port ${config.serverPort}`);
  });
});

