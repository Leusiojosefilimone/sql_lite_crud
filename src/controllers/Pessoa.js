const openDb = require('../configdb');

const createTable = async () => {
  openDb().then((db) => {
    db.exec('CREATE TABLE IF NOT EXISTS pessoa  (id INTERGER PRIMARY KEY, nome TEXT, idade INTERGER)');
  });
};

const insertPessoa = async (pessoa) => {
  openDb()
    .then((db) => {
      db.exec('INSERT INTO pessoa (nome,idade) VALUES(?.?)', [pessoa.nome, pessoa.idade]);
    });
};

module.exports = {
  createTable,
  insertPessoa,
};
