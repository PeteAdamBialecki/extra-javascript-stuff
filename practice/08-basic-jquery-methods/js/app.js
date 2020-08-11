// 1. Show the hidden restaurant review, or use an animation method to reveal it. 
$('.review').css('display', 'block');
// 2. Set the title of the hidden restaurant review to a different name -- whatever you'd like.  
$('.review h3').text('Anonymous:');
// 3. Change the text of the hidden restaurant review. The review should contain HTML, such as a strong tag or a span element. 
$('.review p').html('There is a lot of <b>STUFF</b> here.');
// 4. Change the name of the app. Change *only* the text inside the span element within the h1. 
$('h1 span').text('AWESOME');
// 5. Create an animation for the paragraph with the id of "flashMessage." Chain an animation that 
$('#flashMessage').slideDown('slow').delay(2000).slideUp('slow');
    // slides the message down for 1 second
    // delays the message for 2 seconds 
    // slides the message up for 1 second 
// 6. Inside the click handler, create a working restaurant review form.
$('#submitBtn').click(function(){
    let restaurantTitle = $('#restaurantNameInput').val(); 
    let restaurantReview = $('#restaurantReviewInput').val(); 
        $('#newRestaurant h3').text(restaurantTitle);
        $('#newRestaurant p').text(restaurantReview);
        $('#restaurantNameInput, #restaurantReviewInput').val('');
        //  a. Use the val() method to get what's been entered into the restaurant name and restaurant review form input fields. Save both values to variables.
        //  b. Insert the restaurant name value into the #newRestaurant h3 tag 
        //  c. Insert the restaurant review value into the #newRestaurant paragraph tag
});