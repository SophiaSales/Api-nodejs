const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(erro => {
    if(erro){
        console.log(erro);
    }else{
        console.log('conectado BD');
    }

    Tabelas.init(conexao)
    const app = customExpress()

    app.listen(3030, () => console.log('Servidor rodando'))
})


