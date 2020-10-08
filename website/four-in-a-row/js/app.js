const game = new Game();
document.getElementById('begin-game').addEventListener('click', function () {
    document.getElementById('game-intro').style.display = 'none';
    game.startGame();
    this.style.display = 'none';
    document.getElementById('footerContent').style.margin = "-270px 0px 0px";
    document.getElementById('play-area').style.opacity = '1';
    document.getElementById('game-scene').style.display = 'block';
    document.getElementById('table').style.display = 'block';
});

document.getElementById('restart-game').addEventListener('click', function () {
    document.getElementById('restart-game').style.display = 'none';
});

document.addEventListener('keydown', function (event) {
    game.handleKeydown(event);
});