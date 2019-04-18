var canvas,
    ctx,
    reader;

$(function() {
    var socket = io();

    $('button').on('click', function(){
        canvas.toBlob(function(blob){
            socket.emit('take_photo', {'blob': blob});
        });
        $('button').css('background-color', '#f00');
    })

    socket.on('send_qr', function(){
        $('body').append(`<div class="qr"><div class="qr__code">QRコード</div></div>`);
    })

    canvas = document.getElementById('photoCanvas');
    ctx = canvas.getContext('2d');

    $('#file-image').on('change', function(evt){
        var file = evt.target.files[0];
        reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            drawImg(reader.result, canvas, 0, 0);
        }

        $('button').show();
    })
    
})

function drawImg(src, canvas, x, y) {
    var img = new Image();
    img.onload = function() {
        var w = img.width;
        var h = img.height;
        canvas.width = w;
        canvas.height = h;
        ctx.drawImage(img, x, y, w, h);
    }
    img.src = src;
}
