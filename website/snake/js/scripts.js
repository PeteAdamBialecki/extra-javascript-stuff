
// Game Logic

window.onload = function () {
    canv = document.getElementById("snakeContainer");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000 / 10);

    canvas = document.getElementById("snakeContainer");
    ctx = canvas.getContext("2d");
    width = canvas.width;
    height = canvas.height;
    particles = [];
    numparticles = 500;
    for (i = 0; i < numparticles; i++) {
        particles.push(particle.create(width / 2, height / 2, (Math.random() * 10) + 1, Math.random() * Math.PI * 2))
    }

    update();

    function update() {
        for (var i = 0; i < numparticles; i++) {
            ctx.fillStyle = "cornflowerblue";
            particles[i].update();
            ctx.beginPath();
            ctx.arc(particles[i].position.getX(), particles[i].position.getY(), 3, 0, 2 * Math.PI, false);
            ctx.fill();
        }
        requestAnimationFrame(update);
    }
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
        // explode(xGoal, yGoal);
        document.getElementById("scoreNumber").innerHTML = trail.length + 1;
        tail++;
        xGoal = Math.floor(Math.random() * tileSize);
        yGoal = Math.floor(Math.random() * tileSize);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(xGoal * gridSize, yGoal * gridSize, gridSize - 2, gridSize - 2);
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

function degreeToRadians(value) {
    return (value / 360) * 2 * Math.PI;
}

vector = {
    _x: 0,
    _y: 0,
    create: function (x, y) { var obj = Object.create(this); obj._y = y; obj._x = x; return obj; },
    getX: function () { return this._x },
    getY: function () { return this._y },
    setX: function (value) { this._x = value; },
    setY: function (value) { this._y = value; },
    getLength: function () { return Math.sqrt(this._x * this._x + this._y * this._y) },
    getAngle: function () { return Math.atan2(this._y, this._x) },
    setAngle: function (angle) { length = this.getLength(); this._y = Math.cos(angle) * length; this._x = Math.sin(angle) * length; },
    setLength: function (length) { angle = this.getAngle(); this._y = Math.cos(angle) * length; this._x = Math.sin(angle) * length; },
    add: function (v2) { vect = this.create(this._x + v2._x, this._y + v2._y); return vect; },
    subtract: function (v2) { vect = this.create(this._x - v2._x, this._y - v2._y); return vect; },
    multiply: function (value) { return vector.create(this._x * value, this._y * value) },
    divide: function (value) { return vector.create(this._x / value, this._y / value) },
    scale: function (value) { this._x = this._x * value; this._y = this._y * value; },
    addTo: function (v2) { this._x = this._x + v2._x; this._y = this._y + v2._y },
    subtractFrom: function (v2) { this._x = this._x - v2._x; this._y = this._y - v2._y }
}

particle = {
    velocity: null,
    position: null,
    create: function (x, y, speed, angle) {
        var obj = Object.create(this);
        obj.velocity = vector.create(0, 0);

        obj.velocity.setLength(speed);
        obj.velocity.setAngle(angle);
        obj.position = vector.create(x, y);
        return obj;
    },
    update: function () {
        this.position.addTo(this.velocity);
    }
}