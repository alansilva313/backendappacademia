const Autenticacao = require('../controllers/autenticacao');
const CriarObjetivos = require('../controllers/criar-objetivos');
const CriarUsuario = require('../controllers/criar-usuario');
const Medidas = require('../controllers/medidas');

const routes = require('express').Router();


routes.post('/createmedidas', Medidas.medidas);
routes.post('/createobjetivos', CriarObjetivos.createobjetivos);
routes.post('/autenticate', Autenticacao.autenticate);
routes.post('/caduser', CriarUsuario.caduser);

routes.get('/', (req, res) => {
    return res.status(200).json({ message: 'Bem-vindo ao app de academia!'})
})




module.exports = routes;