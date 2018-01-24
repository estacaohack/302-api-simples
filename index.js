// Importando os módulos/dependências/bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const clientesController = require('./controllers/clientes.js');
const animaisController = require('./controllers/clientes.js');

// Instanciando o express
const app = express();

// Aplicando o body parser
app.use(bodyParser.json());

// Inicializando o servidor
app.listen(3000, () => {
    console.log('Servidor ligado. Acesse em http://localhost:3000');
});

// Endpoints
app.get('/clientes', clientesController.listar);
app.post('/clientes/cliente', clientesController.criar);
app.get('/animais', animaisController.listar);
app.post('/animais/animal', animaisController.criar);

