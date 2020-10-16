
// Game Logic

function update() {
    for (var i = 0; i < numparticles; i++) {
        ctx.fillStyle = "cornflowerblue";
        particles[i].update();
        ctx.beginPath();
        ctx.arc(particles[i].position.getX(), particles[i].position.getY(), 10, 20, 2 * Math.PI, false);
        console.log()
        ctx.fill();
        ctx.closePath();
    }
    requestAnimationFrame(update);
}

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
    ctx.fillStyle = "black";
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
        console.log(xGoal + ", " + yGoal);
        canvas = document.getElementById("snakeContainer");
        ctx = canvas.getContext("2d");
        width = 400;
        height = 400;
        particles = [];
        numparticles = 100;
        for (i = 0; i < numparticles; i++) {
            particles.push(particle.create(width, height, (Math.random() * 10) + 1, Math.random() * Math.PI * 2))
        }
        document.getElementById("scoreNumber").innerHTML = trail.length + 1;
        tail++;
        xGoal = Math.floor(Math.random() * tileSize);
        yGoal = Math.floor(Math.random() * tileSize);
        console.log(xGoal + ", " + yGoal);
        update();
    }
    ctx.fillStyle = "red";
    ctx.fillRect(xGoal * gridSize, yGoal * gridSize, gridSize - 2, gridSize - 2);
}

function keyPush(evt) {
    document.getElementById("failMessage").style.display = "none";
    document.getElementById("gameScore").style.visibility = "visible";
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

function degreeToRadians(value) {
    return (value / 360) * 2 * Math.PI;
}

vector = {
    vectorX: xGoal,
    vectorY: yGoal,
    create: function (xGoal, yGoal) { var obj = Object.create(this); obj.vectorY = yGoal; obj.vectorX = xGoal; return obj; },
    getX: function () { return this.vectorX },
    getY: function () { return this.vectorY },
    setX: function (value) { this.vectorX = value; },
    setY: function (value) { this.vectorY = value; },
    getLength: function () { return Math.sqrt(this.vectorX * this.vectorX + this.vectorY * this.vectorY) },
    getAngle: function () { return Math.atan2(this.vectorY, this.vectorX) },
    setAngle: function (angle) { length = this.getLength(); this.vectorY = Math.cos(angle) * length; this.vectorX = Math.sin(angle) * length; },
    setLength: function (length) { angle = this.getAngle(); this.vectorY = Math.cos(angle) * length; this.vectorX = Math.sin(angle) * length; },
    add: function (v2) { vect = this.create(this.vectorX + v2.vectorX, this.vectorY + v2.vectorY); return vect; },
    subtract: function (v2) { vect = this.create(this.vectorX - v2.vectorX, this.vectorY - v2.vectorY); return vect; },
    multiply: function (value) { return vector.create(this.vectorX * value, this.vectorY * value) },
    divide: function (value) { return vector.create(this.vectorX / value, this.vectorY / value) },
    scale: function (value) { this.vectorX = this.vectorX * value; this.vectorY = this.vectorY * value; },
    addTo: function (v2) { this.vectorX = this.vectorX + v2.vectorX; this.vectorY = this.vectorY + v2.vectorY },
    subtractFrom: function (v2) { this.vectorX = this.vectorX - v2.vectorX; this.vectorY = this.vectorY - v2.vectorY }
}
particle = {
    velocity: null,
    position: null,
    create: function (xGoal, yGoal, speed, angle) {
        var obj = Object.create(this);
        obj.velocity = vector.create(0, 0);
        obj.velocity.setLength(speed);
        obj.velocity.setAngle(angle);
        obj.position = vector.create(xGoal, yGoal);
        return obj;
    },
    update: function () {
        this.position.addTo(this.velocity);
    }
}