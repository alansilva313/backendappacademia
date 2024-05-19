const Autenticacao = require('../controllers/autenticacao');
const BuscarMedidas = require('../controllers/buscar-medidas');
const CriarMedidas = require('../controllers/criar-exercicios');
const CriarObjetivos = require('../controllers/criar-objetivos');
const CriarUsuario = require('../controllers/criar-usuario');
const DeletarExercicio = require('../controllers/delete-exercicio');
const LerExerciciosUser = require('../controllers/ler-exercicios-user');
const Medidas = require('../controllers/medidas');

const routes = require('express').Router();

routes.delete('/deleteexercicio/', DeletarExercicio.deletarexercicio)
routes.post('/criarecercicios', CriarMedidas.criarexercicio)
routes.post('/createmedidas', Medidas.medidas);
routes.post('/createobjetivos', CriarObjetivos.createobjetivos);
routes.post('/autenticate', Autenticacao.autenticate);
routes.post('/caduser', CriarUsuario.caduser);
routes.get('/lerexerciciosuser/', LerExerciciosUser.lerexercicios);
routes.get('/buscarmedidas/', BuscarMedidas.buscarmedidas)
routes.get('/', (req, res) => {
    return res.status(200).json({ message: 'Bem-vindo ao app de academia!'})
})




module.exports = routes;