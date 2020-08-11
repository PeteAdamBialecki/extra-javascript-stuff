//1. Add a "featured" tag to the second item in the list:
  //  Append a new span element containing the word "Featured" to the list item
  //  Add a class of "featured" to the new span element.
//2. Add a class of "new" to the last item in the list. You can traverse to the last item or find a jQuery method that helps you select the last item in the list. 
//3. Add an attribute to each link so that all anchor tags open in a new tab.
//4. Select and print the index and text of each anchor tag to the console
//5. Refactor question #4 using the 'this' keyword.

// 1:
$('#restaurantList li:nth-child(2)').append('<span>Featured</span>');
$("#restaurantList span").addClass('featured');
// 2:
$('#restaurantList li:last-child').addClass('new');
//3:
$('a').attr( "target", "_blank" );
// 4:
$('a').each(function(index, item){
    console.log(index, $(item).text());
  });
// 5:
$('a').each(function(index){
  console.log(index, $(this).text());
});