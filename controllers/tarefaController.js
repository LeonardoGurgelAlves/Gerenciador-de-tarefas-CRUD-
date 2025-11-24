const Tarefa = require('../models/tarefa');

exports.getTarefas = async (req, res) => {
    try {
        const tarefas = await Tarefa.find().sort({ data_vencimento: 1 });
        res.render('index', { tarefas: tarefas });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getNovaTarefaForm = (req, res) => {
    res.render('nova'); 
};

exports.createTarefa = async (req, res) => {
    try {
        const novaTarefa = new Tarefa(req.body);
        await novaTarefa.save();
        res.redirect('/tarefas');
    } catch (err) {
        res.status(400).render('nova', { erro: err.message, tarefa: req.body });
    }
};

exports.getEditarTarefaForm = async (req, res) => {
    try {
        const tarefa = await Tarefa.findById(req.params.id);
        if (!tarefa) return res.status(404).send('Tarefa não encontrada');
        res.render('editar', { tarefa: tarefa }); 
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateTarefa = async (req, res) => {
    try {
        await Tarefa.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
        res.redirect('/tarefas');
    } catch (err) {
        res.status(400).render('editar', { erro: err.message, tarefa: req.body });
    }
};

exports.deleteTarefa = async (req, res) => {
    try {
        await Tarefa.findByIdAndDelete(req.params.id);
        res.redirect('/tarefas');
    } catch (err) {
        res.status(500).send(err);
    }
};