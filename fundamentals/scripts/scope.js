var three = "3";
 function alertNumber() {
     var one = "1";
     alert(one); // First alert

     function alertAnotherNumber() {
         var two = "2";
         alert(two); // Second alert
         alert(three); // Third alert
         alert(one); // Fourth alert
     }

     alertAnotherNumber();
     alert(two); // Ignored
 }

 alertNumber(); // Ignored