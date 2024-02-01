import express from 'express';
import path from "path";
import url from "url";
// import dotenv from "dotenv";
import {createRestApiServer} from './core/servers/index.js';
import { envConstants } from "./core/constants/env.constants.js";

import { booksApi } from "./books.api.js";

const restApiServer = createRestApiServer();

// TODO: Feed env variable in production
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
restApiServer.use("/", express.static(path.resolve(__dirname, envConstants.STATIC_FILES_PATH)));

restApiServer.use(async (req, res, next) => {
  console.log(req.url);
  next();
});

restApiServer.use("/api/books", booksApi);

restApiServer.use(async (error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

restApiServer.listen(envConstants.PORT, () => {
  console.log(`Server ready at port 3000 ${envConstants.PORT}`);
});
