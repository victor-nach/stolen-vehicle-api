import express from 'express';

const app = express();
const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'welcome',
  });
});

app.listen(PORT);
