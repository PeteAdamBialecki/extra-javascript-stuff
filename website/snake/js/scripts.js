window.onload = function () {
    canv = document.getElementById("snakeContainer");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000 / 10);
}
// Starter position
px = py = 10;
// Grid size and tile size
gs = tc = 28;
// Goal
ax = ay = 15;
// Velocity
xv = yv = 0;
// Where it goes
trail = [];
// Tail
tail = 1;
function game() {
    px += xv;
    py += yv;
    if (px < 0) {
        px = tc - 1;
    }
    if (px > tc - 1) {
        px = 0;
    }
    if (py < 0) {
        py = tc - 1;
    }
    if (py > tc - 1) {
        py = 0;
    }
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "lime";
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if (trail.length == 0) {
            console.log("asdf");
        } else if (trail[i].x == px && trail[i].y == py) {
            document.getElementById("scoreNumber").innerHTML = "Go";
            tail = 1;
            document.getElementById("failMessage").style.display = "block";
        }
    }

    trail.push({ x: px, y: py });
    while (trail.length > tail) {
        trail.shift();
    }

    if (ax == px && ay == py) {
        document.getElementById("scoreNumber").innerHTML = trail.length + 1;
        tail++;
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);
    }

    ctx.fillStyle = "red";
    ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}
function keyPush(evt) {
    document.getElementById("failMessage").style.display = "none";
    document.getElementById("gameScore").style.display = "block";
    document.getElementById("scoreNumber").innerHTML = trail.length;
    switch (evt.keyCode) {
        case 37:
            xv = -1;
            yv = 0;
            break;
        case 38:
            xv = 0;
            yv = -1;
            break;
        case 39:
            xv = 1;
            yv = 0;
            break;
        case 40:
            xv = 0;
            yv = 1;
            break;
    }
}

keyPush();