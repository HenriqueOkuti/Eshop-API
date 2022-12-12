import express, { Express } from 'express';
import cors from 'cors';
import * as config from './config';

config.loadEnv();

const server = express();
server.use(cors()).use(express.json());

export function init(): Promise<Express> {
  config.connectDb();
  return Promise.resolve(server);
}

export function close(): Promise<Express> {
  config.disconnectDB();
  return Promise.resolve(server);
}

export default server;
