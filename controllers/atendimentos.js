module.exports = app =>{

    app.get('/atendimentos', (req, res) => res.send('Você esta na rota de atendimentos em GET'))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body);
        res.send('Você esta na rota de atendimento em POST')
    })
    

}