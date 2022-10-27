const funcoes = require("../services/UsuariosServices")
let teste =  {
    "id": 129,
    "nome": "Felipe",
    "email": "felipe@eu.com.br",
    "senha": "123456",
    "enderecos": [
        "asdasdasd"
    ],
    "formasDePagamento": []
}


funcoes.alterar(teste, 2)