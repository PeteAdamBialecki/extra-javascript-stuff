
$(document).ready(function() {
    var e = $.Event('keydown', { keyCode: 39 });// right arrow key
    $(document).trigger(e);
});

window.onload = function () {
    canv = document.getElementById("snakeContainer");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000 / 10);
}
// Starter position
xPosition = yPosition = 10;
// Grid size and tile size
gridSize = tileSize = 28;
// Goal
xGoal = yGoal = 15;
// Velocity
xVelocity = yVelocity = 0;
// Where it goes
trail = [];
// Tail
tail = 1;
function game() {
    xPosition += xVelocity;
    yPosition += yVelocity;
    if (xPosition < 0) {
        xPosition = tileSize - 1;
    }
    if (xPosition > tileSize - 1) {
        xPosition = 0;
    }
    if (yPosition < 0) {
        yPosition = tileSize - 1;
    }
    if (yPosition > tileSize - 1) {
        yPosition = 0;
    }
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "lime";
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gridSize, trail[i].y * gridSize, gridSize - 2, gridSize - 2);
        if (trail[i].x == xPosition && trail[i].y == yPosition) {
            document.getElementById("scoreNumber").innerHTML = "Go";
            tail = 1;
            if (trail.length > 1) {
                document.getElementById("failMessage").style.display = "block";
            }
        }
    }

    trail.push({ x: xPosition, y: yPosition });
    while (trail.length > tail) {
        trail.shift();
    }

    if (xGoal == xPosition && yGoal == yPosition) {
        document.getElementById("scoreNumber").innerHTML = trail.length + 1;
        tail++;
        xGoal = Math.floor(Math.random() * tileSize);
        yGoal = Math.floor(Math.random() * tileSize);
    }

    ctx.fillStyle = "red";
    ctx.fillRect(xGoal * gridSize, yGoal * gridSize, gridSize - 2, gridSize - 2);
    console.log(xGoal);
}
function keyPush(evt) {
    document.getElementById("failMessage").style.display = "none";
    document.getElementById("gameScore").style.display = "block";
    document.getElementById("scoreNumber").innerHTML = trail.length;
    switch (evt.keyCode) {
        case 37:
            xVelocity = -1;
            yVelocity = 0;
            break;
        case 38:
            xVelocity = 0;
            yVelocity = -1;
            break;
        case 39:
            xVelocity = 1;
            yVelocity = 0;
            break;
        case 40:
            xVelocity = 0;
            yVelocity = 1;
            break;
    }
}