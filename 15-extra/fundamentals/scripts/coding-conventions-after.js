// The following JavaScript has been updated and refactored with the help of JSLint.

// Lines 4 - 6 are use to override default errors caused by JSLint.
/*global
alert, confirm, console, prompt
*/

alert("Hello World!");

function lameJoke() {
    // "use strict" is used when decalring a variable like 'randomNumber' below.
    "use strict";
    var randomNumber = Math.round(Math.random() * 2);
    if (randomNumber === 1) {
        alert("How many tickles does it take to make an octopus laugh? Ten tickles.");
    } else if (randomNumber === 2) {
        alert("Why did the scarecrow win an award? Because he was outstanding in his field.");
    } else {
        alert("Why did the chicken cross the road? To get to the other side!");
    }
}

lameJoke();