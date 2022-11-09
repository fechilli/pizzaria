const usuarios = require('../databases/usuarios.json')
const bcrypt = require('bcrypt');

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


function listar(){
    // Seu código aqui
    console.table(usuarios.map(
        u => {return{
            id: u.id,
            nome: u.nome,
            email: u.email
        }}
    ))
}


function listarNome(){
  
    console.table(usuarios.map(u => u.nome))
}


function buscar(){
    // console.table(usuarios.filter(usuario.nome))

}



function salvar(arrayDeUsuarios){
   
    const fs = require('fs')
    fs.writeFileSync("./databases/usuarios.json", JSON.stringify(arrayDeUsuarios, null, 2))

}

function cadastrar(objeto){

        let senhaCriptografada = bcrypt.hashSync(objeto.senha, 10)
        let novoId = usuarios[usuarios.length - 1].id+1
        let usuarioCad = {
            id: novoId,
            nome: objeto.nome,
            email: objeto.email,
            senha: senhaCriptografada,
            enderecos: [objeto.enderecos],
            formasDePagamento: []

        }
        
}



function detalhar(idUsuario){
// Seu código aqui
    //let detalhes = usuarios.map(c => c.id === idUsuario);

    let detalhes2 = usuarios.find(u => u.id === idUsuario)
    let detalhes3 = {
        nome: detalhes2.nome,
        email: detalhes2.email,
        enderecos: detalhes2.enderecos,
        formasDePagamento: detalhes2.formasDePagamento
    }
    console.log(detalhes3)
}



function remover(idDoUsuarioParaRemover){
    // Seu código aqui
    let procurarId = usuarios.find(u => u.id === idDoUsuarioParaRemover) // procurando o objeto
    
    let remove = usuarios.indexOf(procurarId)// identificando se o objeto existe dentro do array
    
    if (remove > -1){ // condição para validar se achou o elemento no array
        usuarios.splice(remove,1) // função para remover do array

    }
        
    console.log(procurarId)

}


function alterar(novosDados, idUsuario){
    let procurarId = usuarios.find(u => u.id === idUsuario)
    //const senhaNova = bcrypt.hashSync(novosDados.senha, 10)
    let dados={
        
        nome: novosDados.nome,
        email: novosDados.email,
        senha: "senha"
    }
    procurarId.nome = dados.nome
    procurarId.email = dados.email
    procurarId.senha = bcrypt.hashSync(dados.senha, 10)
    
    console.log(procurarId)
}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
    let procurarId = usuarios.find(u => u.id === idUsuario)

   // let end = procurarId.enderecos.push(novoEndereco)
    
}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
    let procurarId = usuarios.find(u => u.id === idUsuario).enderecos // localiza o array de endereço dentro do usuario
    let procIndice = procurarId[posicaoDoEndereco]
    if ( procIndice != undefined){
       procurarId.splice(posicaoDoEndereco, 1)
    }
    
    
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
    
    
    
    let procurarId = usuarios.find(u => u.id === idUsuario).enderecos // localiza o array de endereço dentro do usuario
    let procIndice = procurarId[posicaoDoEndereco] // busca no array o indice
    let n = novoEndereco
    console.log(procIndice)
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    let procurarId = usuarios.find(u => u.id === idUsuario)
    let newPag = procurarId.formasDePagamento.push(novaFormaDePagamento)
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    let procurarId = usuarios.find(u => u.id === idUsuario)
    let localizar = procurarId.formasDePagamento.indexOf(posicaoDaFormaDePagamento)
    if(localizar === -1){
        procurarId.splice(posicaoDaFormaDePagamento)
    }
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    let procurarId = usuarios.find(u => u.id === idUsuario)
}

const UsuariosServices = {
    cadastrar,
    listar,
    detalhar,
    salvar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento
}

module.exports = UsuariosServices;