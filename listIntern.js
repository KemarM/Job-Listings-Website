// listJobs.js
// Read data from storage and create a list

var i=0;
var html = "";
$(document).ready(function(){
  // hide the items in jobs in the list when clicked
  $("li").click(function(){
	 $(this).hide();  
  });
});


try
{
   if (localStorage != null)
   {    
      html = "<ul data-role='listview'>";

      for (i=0; i < localStorage.length; i++)
      {
         var keyword = localStorage.key(i);
         var Job = JSON.parse(localStorage[keyword]);
         		
		// Allow hiding of items
		if (Job.internName != null) { //checks to see if the item is a internship listing
			html += "<li><h3>" + keyword + "</h3>" + "<p>" + Job.internDescription + "</p></li>";
		}
      
    }
	html += "</ul>";
	
 document.write(html);
	}
}
catch (e)
{
  document.write("<p>Your places of interest list is empty. Add items before listing.</p>");

}