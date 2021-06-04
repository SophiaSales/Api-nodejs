const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')

conexao.connect(erro => {
    if(erro){
        console.log(erro);
    }else{
        console.log('conectado BD');
    }

    const app = customExpress()

    app.listen(3030, () => console.log('Servidor rodando'))
})


