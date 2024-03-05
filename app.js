const express = require("express")
const app = express()
var agendamentos = require('./banco.js')

app.get("/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado/:observacao", function(req, res){
    agendamentos.create({
        nome: req.params.nome,
        endereco: req.params.endereco,
        bairro: req.params.bairro,
        cep: req.params.cep,
        cidade: req.params.cidade,
        estado: req.params.estado,
        observacao: req.params.observacao
    })

    res.send("nome: "+ req.params.nome+ "<br>" +
            "endereco: "+ req.params.endereco + "<br>"+
            "bairro: "+ req.params.bairro + "<br>"+
            "cep: "+ req.params.cep + "<br>"+
            "cidade: "+ req.params.cidade + "<br>"+
            "estado: "+ req.params.estado + "<br>" +
            "observacao: "+ req.params.observacao + "<br>")
})

app.listen(8081, function(){
    console.log("Servidor Rodando na porta 8081")
})