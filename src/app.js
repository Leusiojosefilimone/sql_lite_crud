const express = require('express');
const { createTable, insertPessoa } = require('./controllers/Pessoa');

const app = express();
app.use(express.json);

app.get('/', (req, res) => {
  res.send('ola mundo');
});

createTable();

app.post('/pessoa', (req, res) => {
  insertPessoa(req.body);
  res.json({
    StatusCode: 200,
  });

  app.listen(3000, () => {
    console.log('Sevidor rodando na porta 3000');
  });
});
