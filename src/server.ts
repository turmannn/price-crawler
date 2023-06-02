import * as express from 'express';
import { Worker } from 'worker_threads';
import routes from './routes';
import { initDb } from './utils/database';


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
