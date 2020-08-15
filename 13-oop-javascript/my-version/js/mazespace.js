'use strict';

function mazeSpace(directions) {
    let i;
    for (let i = 0; i< directions.length; i += 1) {
        this[directions[i]] = false;
    }
}

mazeSpace.prototype.setWall = function(direction) {
    this[direction] = true;
}