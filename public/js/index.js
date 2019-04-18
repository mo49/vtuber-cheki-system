$(function() {
    var socket = io();

    $('button').on('click', function(){
        socket.emit('take_photo', {blob: 'photo blob data'}, function(data){
            console.log('data: ' + data);
        })
    })

    socket.on('send_qr', function(){
        $('body').append('<p>QRコードの表示</p>');
    })
    
})

