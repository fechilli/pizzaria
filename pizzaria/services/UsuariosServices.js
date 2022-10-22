const usuarios = require('../databases/usuarios.json')

console.log(usuarios)
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
    console.table(usuarios.filter(usuario.nome))

}

buscar()

function salvar(arrayDeUsuarios){
    // Seu código aqui
}




function cadastrar(objeto){
// Seu código aqui
}

function detalhar(idUsuario){
// Seu código aqui
}

function remover(idDoUsuarioParaRemover){
    // Seu código aqui
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