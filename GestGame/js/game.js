var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
var player = {x: 180, y: 180, size: 40};

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#0a0';
    ctx.fillRect(player.x, player.y, player.size, player.size);
}

draw();

function move(dx, dy) {
    player.x += dx;
    player.y += dy;
    player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));
    draw();
}

gest.options.subscribeWithCallback(function(g) {
    if (g.fast) {
        if (g.direction === 'Left') move(-20,0);
        if (g.direction === 'Right') move(20,0);
        if (g.direction === 'Up') move(0,-20);
        if (g.direction === 'Down') move(0,20);
        if (g.direction === 'Lower Left') move(-20,20);
        if (g.direction === 'Lower Right') move(20,20);
    }
});

gest.start();
