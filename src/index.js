import express from 'express';
import { responseShort } from './utils/responseMsg';

const app = express();
const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
  responseShort(res, 200, 'welcome');
});

app.listen(PORT);
