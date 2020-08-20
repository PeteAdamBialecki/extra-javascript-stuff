// Object Literal
// var mark = {
//     name: "Mark",
//     shirtColor: "navy blue"
// };

// var lisa = {
//     name: "Lisa",
//     shirtColor: "red"
// };

// Object Constructor
function Friend(name, shirtColor) {
    this.name = name;
    this.shirtColor = shirtColor;
}

var denny = new Friend("Denny", "green");

alert(denny.name);