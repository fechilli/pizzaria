// 1 - importar o express
const express = require('express')

// 2 - criar o servidor
const servidor = express()

// 3 - Definir de uma rota neste servidor 
// endereço, metodo, funcao callback (a acao que o servidor vai realizar quando a rep chegar)
servidor.get('/usuarios', (req, res)=>{
    console.log("chegou uma requisição")
    //return res.send("ola Brasel dsdsd")
    res.sendFile(__dirname + '/views/index.html')
})
// 4 - por o serv idor no modo "aguardando requisição"

servidor.listen(3000)