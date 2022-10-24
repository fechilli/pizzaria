

const usuarios = require('../databases/usuarios.json')


function listar(){
    // Seu código aqui
    console.table(usuarios.map)  

}
listar()