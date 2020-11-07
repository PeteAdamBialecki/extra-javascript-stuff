

$(document).ready(function () {
    var e = $.Event('keydown', { keyCode: 39 });// right arrow key
    $(document).trigger(e);
    setTimeout(function () {
        $("#pageAlert").modal();
    }, 100);
});

window.onload = function () {
    canv = document.getElementById("snakeContainer");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000 / 10);
}

function gameIntroduction() {
    myAudio.play();
}

var myAudio = new Audio('../sounds/8-snake-song-patakas-world.wav');
myAudio.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);

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
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "lime";
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gridSize, trail[i].y * gridSize, gridSize - 2, gridSize - 2);
        if (trail[i].x == xPosition && trail[i].y == yPosition) {
            document.getElementById("scoreNumber").innerHTML = "Go";
            document.getElementById("scoreNumber").style.margin = "auto";
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
        eatingSound();
        document.getElementById("scoreNumber").innerHTML = trail.length + 1;
        tail++;
        xGoal = Math.floor(Math.random() * tileSize);
        yGoal = Math.floor(Math.random() * tileSize);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(xGoal * gridSize, yGoal * gridSize, gridSize - 2, gridSize - 2);
}

function upDownSnd() {
    var sound = document.getElementById("upDownSnd");
    sound.play()
}

function leftRightSnd() {
    var sound = document.getElementById("leftRightSnd");
    sound.play()
}

function eatingSound() {
    var sound = document.getElementById("eatingSound");
    sound.play()
}

function keyPush(evt) {
    document.getElementById("failMessage").style.display = "none";
    document.getElementById("gameScore").style.visibility = "visible";
    document.getElementById("scoreNumber").style.margin = "auto";
    document.getElementById("scoreNumber").innerHTML = trail.length;
    switch (evt.keyCode) {
        // Left
        case 37:
            leftRightSnd();
            xVelocity = -1;
            yVelocity = 0;
            break;
        // Up
        case 38:
            upDownSnd();
            xVelocity = 0;
            yVelocity = -1;
            break;
        // Right
        case 39:
            leftRightSnd();
            xVelocity = 1;
            yVelocity = 0;
            break;
        // Down
        case 40:
            upDownSnd();
            xVelocity = 0;
            yVelocity = 1;
            break;
    }
}