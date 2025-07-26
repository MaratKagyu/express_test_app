import express from "express";
import config from "./config/config";

const app = express();

app.get('/', (req, res) => {
  res.send(`Hello World! Running as ${config.appMode}`);
});


app.listen(config.serverPort, () => {
  // Run when the server is ready
  console.log(`Listening on port ${config.serverPort}`);
});
