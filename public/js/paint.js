$(function() {
    var socket = io();

    socket.on('send_photo', function(data){
        var blob = new Blob([data.blob], {type: "image/png"});
        var fileReader = new FileReader() ;
        fileReader.onload = function() {
            InsertPhoto(this.result);
        }
        fileReader.readAsDataURL(blob) ;
    })

    $('button').on('click', function() {
        socket.emit('give_autograph', {'blob': 'autograph blob data'})
    })
})

function InsertPhoto(src) {
    canvas = document.getElementById('photoCanvas');
    ctx = canvas.getContext('2d');

    var img = new Image();
    img.onload = function() {
        var w = img.width;
        var h = img.height;
        canvas.width = w;
        canvas.height = h;
        ctx.drawImage(img, 0, 0, w, h);
    }
    img.src = src;
}

