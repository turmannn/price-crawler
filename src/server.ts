import routes from './routes';
import { initDb } from './utils/database';

// import * as express from 'express';
// const express = require('express');
import express from 'express';
import { Worker } from 'worker_threads';




console.log('about to connect to db');
(async () => { await initDb() })();

console.log('about to create server')
const app = express();
const port = 3000;


// middleware
app.use(express.json());

// routes
app.use('/', routes );

app.listen(port, () => {
  console.log(`server is running on port: ${port}`)
});

const worker = new Worker('./src/utils/worker.ts');
