import express from 'express';
import routes from './routes';
import { responseShort, responseErr } from './utils/responseMsg';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', routes);

app.get('/', (req, res) => {
  responseShort(res, 200, 'welcome');
});

app.all('*', (req, res) => {
  responseErr(res, 404, 'Sorry endpoint does not exist');
});

app.listen(PORT);
