import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import { responseShort, responseErr } from './utils/responseMsg';

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

app.use('/', routes);

app.get('/', (req, res) => {
  responseShort(res, 200, 'welcome');
});

app.all('*', (req, res) => {
  responseErr(res, 404, 'Sorry endpoint does not exist');
});

app.listen(PORT);

export default app;
