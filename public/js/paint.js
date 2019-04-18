$(function() {
    var socket = io();

    socket.on('send_photo', function(data){
        $('body').append('<p>ファンが撮った写真</p>');
    })

    $('button').on('click', function() {
        socket.emit('give_autograph', {blob: 'autograph blob data'})
    })
})


