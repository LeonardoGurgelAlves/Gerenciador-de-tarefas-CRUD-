const mongoose = require('mongoose');

const tarefaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'O título é obrigatório'] 
    },
    descricao: {
        type: String,
        required: false 
    },
    data_criacao: {
        type: Date,
        default: Date.now 
    },
    data_vencimento: {
        type: Date,
        required: [true, 'A data de vencimento é obrigatória']
    },
    prioridade: {
        type: String,
        enum: ['baixa', 'média', 'alta'], 
        default: 'baixa'
    },
    status: {
        type: String,
        enum: ['pendente', 'em andamento', 'concluída'], 
        default: 'pendente'
    }
});

module.exports = mongoose.model('Tarefa', tarefaSchema);