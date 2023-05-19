import * as express from 'express';
import routes from './routes';

const app = express();
const port = 3000;


// middleware
app.use(express.json());

// routes
app.use('/', routes );

app.listen(port, () => {
  console.log(`server is running on port: ${port}`)
});