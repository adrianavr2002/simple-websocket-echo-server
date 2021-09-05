const Websocket = require('ws');

//Vamos construir o servidor

const PORT = 5000

const wsServer = new Websocket.Server({
    port: PORT
})

wsServer.on('connection', function (socket) {
    // avisa no console uma nova conexão
    console.log('A Client just connected!');

    // Recebemos uma mensagem vinda do cliente e printamos no servidor
    socket.on('message', function (msg) {
        console.log("Received message from cliente: "+ msg)

        // Enviamos de volta a mensagem para esse cliente

        //socket.send("Take this back: " + msg)

        // Enviamos a mensagem para todos os clientes conectados, Broadcast
        wsServer.clients.forEach(function (client) {
            client.send("Someone said: "+ msg)
            
        })
    })

    


})
console.log( ( new Date()+ " Server is listening on port " + PORT ))