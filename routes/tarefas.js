const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.get('/', tarefaController.getTarefas);

router.get('/nova', tarefaController.getNovaTarefaForm);

router.post('/', tarefaController.createTarefa);

router.get('/editar/:id', tarefaController.getEditarTarefaForm);

router.put('/:id', tarefaController.updateTarefa); 

router.post('/deletar/:id', tarefaController.deleteTarefa); 

module.exports = router;