// Lines 2 - 4 are use to override default errors caused by JSLint.
/*global
alert, confirm, console, prompt
*/

alert("It is the zombie apocalypse.  You are looting a store and suddenly a zombie bursts through the door!");
var weapon = prompt("You search around frantically for a weapon.  What do you choose?  A bow and arrow, an axe, or a rubber chicken?");
var randomNumber = Math.round(Math.random());
alert("You attack the zombie with your" + " " + weapon);
if (randomNumber === 0) {
    alert("The zombie bites you.  You lose!!!");
} else if (randomNumber === 1) {
    alert("You kill the zombie with your" + " " + weapon + ". You win!");
}