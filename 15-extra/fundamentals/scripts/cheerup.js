// Meet Therapy, the JavaScript Care Robot! 

/* A confirm pop up returns a boolean value (true or false)
   -  if "ok" is clicked, it returns true
   -  if "cancel" is clicked, it returns false 
*/
var sad = confirm("Would you like to be cheered up?");

//this is the same as saying while (sad === true)
while (sad) {
  
  alert("What do you call a boomerang that doesn't come back? ... A stick!"); 
  var yes = confirm("Would you like to continue our session?");
  
  if (yes) {
    var response = prompt("Tell me about your troubles:", "Type your feelings here");
    
    if(response){
      alert("I am sorry you are feeling down about that. I know you can't see it, but I, the computer, will now give you a hug.  **hug**");
      sad = false;
    } 
  } else {
    sad = false;
  } 
}


/* 
Another example:

var userLoggedIn = false;

while(userLoggedIn){
   //display login info
}

*/