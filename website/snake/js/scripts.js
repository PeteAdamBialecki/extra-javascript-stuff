

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
    document.getElementById("youtube-icon2").click();
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
            document.getElementById("scoreNumber").style.margin = "auto";
            tail = 1;
            if (trail.length > 1) {
                document.getElementById("failMessage").style.display = "block";
                failSound();
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

function upDownSound() {
    var upDownSound = document.getElementById("upDownSound");
    upDownSound.play()
}

function leftRightSound() {
    var leftRightSound = document.getElementById("leftRightSound");
    leftRightSound.play()
}

function eatingSound() {
    var eatingSound = document.getElementById("eatingSound");
    eatingSound.volume = 1;
    eatingSound.play()
}

function failSound() {
    var failSound = document.getElementById("failSound");
    failSound.volume = 1;
    failSound.play()
}

function keyPush(evt) {
    document.getElementById("failMessage").style.display = "none";
    document.getElementById("gameScore").style.visibility = "visible";
    document.getElementById("scoreNumber").style.margin = "auto";
    document.getElementById("scoreNumber").innerHTML = trail.length;
    switch (evt.keyCode) {
        // Left
        case 37:
            leftRightSound();
            xVelocity = -1;
            yVelocity = 0;
            break;
        // Up
        case 38:
            upDownSound();
            xVelocity = 0;
            yVelocity = -1;
            break;
        // Right
        case 39:
            leftRightSound();
            xVelocity = 1;
            yVelocity = 0;
            break;
        // Down
        case 40:
            upDownSound();
            xVelocity = 0;
            yVelocity = 1;
            break;
    }
}

// Background Music

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player2;
function onYouTubeIframeAPIReady() {

    var ctrlq2 = document.getElementById("backgroundAudio");
    ctrlq2.innerHTML = '<img id="youtube-icon2" src=""/><div id="youtube-player2"></div>';
    ctrlq2.style.cssText = 'width:150px;margin:2em auto;cursor:pointer;cursor:hand;display:none';
    ctrlq2.onclick = toggleAudio2;

    player2 = new YT.Player('youtube-player2', {
        height: '0',
        width: '0',
        videoId: ctrlq2.dataset.video,
        playerVars: {
            autoplay: ctrlq2.dataset.autoplay,
            loop: ctrlq2.dataset.loop,
        },
        events: {
            'onReady': onPlayerReady2,
            'onStateChange': onPlayerStateChange2
        }
    });
}

function togglePlayButton2(play) {
    var backgroundMusic = document.getElementById("youtube-icon2");
    backgroundMusic.src = play ? "../img/stop.png" : "../img/play.png";
}

function toggleAudio2() {
    if (player2.getPlayerState() == 1 || player2.getPlayerState() == 3) {
        player2.pauseVideo();
        togglePlayButton2(false);
    } else {
        player2.playVideo();
        togglePlayButton2(true);
    }
}

function onPlayerReady2(event) {
    player2.setPlaybackQuality("small");
    document.getElementById("backgroundAudio").style.display = "block";
    togglePlayButton2(player2.getPlayerState() !== 5);
}

function onPlayerStateChange2(event) {
    if (event.data === 0) {
        togglePlayButton2(false);
    }
}