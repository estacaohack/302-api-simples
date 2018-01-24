
exports.listar = (req, res) => {
    console.log('Acessei a rota /clientes');
    res.send('Ok');
}

exports.criar = (req, res) => {
    res.send('Ok');
    console.log('Processando requisição de um novo animal.');
}
