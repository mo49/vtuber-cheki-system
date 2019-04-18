var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var router = express.Router();
var PORT = process.env.PORT || 5000;

app.set('port', PORT);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/index.html'))
});
app.get('/paint', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/paint.html'))
});

io.on('connection', function(socket){
  // console.log('connected')
  socket.on('take_photo', function(data){
    console.log('take photo')
    console.log(data.blob)
    io.emit('send_photo', {'blob': data.blob});
  })
  socket.on('give_autograph', function(data){
    console.log('take photo')
    console.log(data.blob)
    io.emit('send_qr', {'blob': data.blob});
  })
  
})


http.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});