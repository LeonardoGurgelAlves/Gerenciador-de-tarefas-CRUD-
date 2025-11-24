require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const tarefaRoutes = require('./routes/tarefas');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log('Conectado ao MongoDB!'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.set('view engine', 'ejs'); 
app.use(express.static('public')); 
app.use(express.urlencoded({ extended: true })); 
app.use(methodOverride('_method')); 

app.get('/', (req, res) => res.redirect('/tarefas')); 
app.use('/tarefas', tarefaRoutes); 

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('XIiiiiii! Algo deu errado!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});