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
    let procurarId = usuarios.find(u => u.id === idDoUsuarioParaRemover)
    let remove = usuarios.indexOf(idDoUsuarioParaRemover)
    
    console.log(procurarId)

}


function alterar(novosDados, idUsuario){
    // Seu código aqui
}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui        
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
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