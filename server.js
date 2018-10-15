const express=require('express')
const path=require('path')
const app=express()
const socketio=require('socket.io')
const http=require('http')

app.use('/',express.static(path.join(__dirname,'frontend')));
const server=http.createServer(app)
const io=socketio(server)
const SERVER_PORT=process.env.PORT||1234

io.on('connection',function(socket){
    socket.on('send_msg',(data)=>{
        io.emit('recv_msg',data);
    })
    socket.on('send_p',(data)=>{
        io.emit('recv_p',data);
    })
})

server.listen(SERVER_PORT,()=>{
    console.log('server started');
})