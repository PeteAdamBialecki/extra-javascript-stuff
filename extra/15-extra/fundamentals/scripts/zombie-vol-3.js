// Lines 2 - 4 are use to override default errors caused by JSLint (initial settings).
/*global
alert, confirm, console, prompt
*/

/*  PLANNING A PROJECT:
-----------------------------------------------
1. What do you want to make?:
-----------------------------------------------

I want to create a zombie text adventure game where the player
starts with a random scenario. They search for a weapon and fight a zombie.
The player has a 33% chance of getting bitten and losing, or killing the zombie and winning.

-----------------------------------------------
2. What steps do you think are necessary?
-----------------------------------------------

Beginning:
1. Write scenarios
2. Store a list of possible scenarios
3. Alert a random scenario from the list of possible scenarios

Weapon:
1. Create a list of weapons
2. Save the list of weapons
3. Alert which weapon the player finds

-----------------------------------------------
3. What syntax or coding patterns might you use?
-----------------------------------------------

Arrays for lists
Need multiple random numbers so a randomNumber function

-----------------------------------------------
Remember: There are many ways to create things with code! The most important part is to write it and get it working.  If you can't get something to work, try making it simpler.
After, look for ways you might improve your code!
*/

// The above comments and guidelines result in the following code:

function gameStart() {
// Initalize, or declare, a variable that will store the outcome of the game (win or lose).
    "use strict";
    var outcome;

// Alert the introduction
    alert("One day you wake up and the world as you know has ended.  The dead come to life and prey on the living. There is no hope, no cure, only survival.  Welcome to the zombie apocalypse.");

// Store an array of possible beginning scenarios
    var beginningScenarios = ["You wake up in a hospital.  It is eerily quiet.  You tiptoe to the door and peek out.", "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.", "Desperate times call for desperate measures.  You see a small convenience store up ahead and decide to loot it for goods."];

// Random number function that generates a whole number between 0 and range
    function randomNumber(range) {
        if (typeof range === "number") {
            return Math.round(Math.random() * range);
        }
    }

// Alert a random scenario from the beginningScenarios array
    alert(beginningScenarios[randomNumber(beginningScenarios.length - 1)]);

// Create a character object
    var character = {
        health: 5,
        strength: 0,
        stealth: 0,

    // Ask the player to choose a name for the character
        name: prompt("What is your name?"),

    // Ask the player to choose a class for the character
        characterClass: prompt("These times test the strengths of our character. What were you before the war? (Choose from: soldier, doctor, or politician)").toLowerCase()

    };

// Check to see if player has entered a name...if not, give them another chance
    if (!character.name) {
        character.name = prompt("I don't know what to call you if you don't enter a name. If you don't answer I will be forced to name you myself...Last chance. What is your name?");

    // If a name still has not been entered, assign a name to the character
        if (!character.name) {
            alert("Well I did try to warn you. Gunther Piddles it is then.");
            character.name = "Gunther Piddles";
        }
    }

// If the character is a soldier, change the strength property from 0 to 5
    if (character.characterClass === "soldier") {
        character.strength = 5;
    }
    // If the character is a politician, change the stealth property from 0 to 5
    if (character.characterClass === "politician") {
        character.stealth = 5;
    }
    // If the character is a doctor, change the health property from 5 to 7
    if (character.characterClass === "doctor") {
        character.health = 7;
    }

// Alert the zombie encounter scenario, and store the player's chosen response in the choice variable
    var choice = prompt("The brave adventurer and former " + character.characterClass + " " + character.name + " enters a store for some loot.  You notice a zombie slowly shuffling around amongst the destruction. What action shall you take? Attack, or attempt to sneak by the zombie? ").toLowerCase();

// Check to see if the player's choice was attack
    if (choice === "attack") {

// If so, check to see if the character's strength is 5
        if (character.strength === 5) {

// If the strength is 5, alert the result
            alert("Using only your bare hands, you slay that zombie! Success! You loot the store for goods and find an axe, a pack of batteries, and three cans of Beanie Weenies.");

// Set outcome variable to win
            outcome = "win";

// Increase stats if success
            character.strength++;

    // If the character's strength is less than 5, alert a different scenario
        } else if (character.strength <= 5) {
            alert("You fearlessly charge the zombie with all your strength.  Using your mighty powers you crush thy foe as if it were a sheet of paper you needed to shred.");
            alert("Just kidding. You are immediately bitten by the zombie and die. But not all is lost -- if time spent together makes one friends, then you and the zombie become best friends, and live together for eternity. The end.");

// Set outcome variable to lose
            outcome = "lose";
        }
    }

// Check to see if the player's choice was to sneak by the zombie
    if (choice === "sneak" || choice === "sneak by the zombie") {

// If the character's stealth is 5, they sneakby the zombie
        if (character.stealth === 5) {
            alert("You sneak by the zombie, you clever bastard.");

// Set outcome variable to win
            outcome = "win";
        }

//Check to see if the character's stealth is less than 5
        if (character.stealth < 5) {

// If stealth is less than 5, the zombie is alerted but the player can still win if their strength is high enough
            alert("You try to slip by the zombie, but you accidentally stumble over a can of Beanie Weenies, alerting the zombie of your existence. It slowly turns its head and shuffles towards you.");

// Check to see if strength is 5
            if (character.strength === 5) {
                alert("Although you have alerted the zombie to your presence you are able to crush its skull with your bare hands.");

// Set outcome variable to win
                outcome = "win";

// If stealth and strength are less than 5, the player loses
            } else {
                alert("Weaponless and weak the zombie chomps down on an arm as you flail wildly in its general direction.");

// Set outcome variable to lose
                outcome = "lose";
            }
        }
    }

// Check to see if outcome is win or lose, and alert the appropriate result
    if (outcome === "lose") {
        alert("You lose!");
    } else if (outcome === "win") {
        alert("You win!");
    }
}

// Using the existing character object build on the complexity of the game, perhaps by using the unused health property to change the outcome based on the doctor character class.
// Another idea is to use the code you created in Volume 2 and add an object of your own to increase the complexity of the game.
// Either create your own character object to use, or think of another way objects could be used to enhance the game. //