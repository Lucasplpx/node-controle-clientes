var express = require('express');
var router = express.Router();
const Cliente = require('../models/Cliente');



// Apresenta formulario
router.get('/', function(req, res, next) {
    res.render('client', { title: 'Cadastrar Cliente' });
});

// Cadastra Cliente
router.post('/', function(req, res, next) {

    Cliente.create({
        nome: req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf,
        mensagem: req.body.mensagem
    }).then(() => {
        console.log("Cadastrado com sucesso");
        res.redirect('/client/list')
    }).catch((err) => {
        console.log(err.message)
    })
});

// Altera Cliente
router.post('/edit', function(req, res, next) {

    Cliente.update({
        nome: req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf,
        mensagem: req.body.mensagem,
    }, {
        where: {
            id: req.body.id
        }
    }).then(() => {
        console.log('Cliente alterado')
        res.redirect('/client/list')
    })

});

// Pega os dados do cliente para alteração
router.get('/edit/:id', function(req, res, next) {

    console.log("id " + req.params.id)
    Cliente.findAll({
        where: {
            id: req.params.id
        }
    }).then((dados) => {
        console.log("dados " + dados)
        res.render('client_edit', { title: 'Editar Cliente', cliente: dados });
    })

});





// Lista Clientes
router.get('/list', function(req, res, next) {

    Cliente.findAll().then((dados) => {
        res.render('client_list', { title: 'Lista de Clientes', clientes: dados });
    }).catch((err) => {
        console.log(err)
    })

});


// Deleta Cliente
router.get('/:id', function(req, res, next) {

    Cliente.destroy({
        where: { 'id': req.params.id }
    }).then(() => {
        res.redirect('/client/list')
    }).catch((err) => {
        res.send('Esse usuario não existe!')
    })

})



module.exports = router;