const express = require('express')

const app = express()

app.listen(3000, () => console.log('Servidor rodando'))

app.get('/atendimentos', (req, res) => res.send('Voce esta na rota de atendimentos'))