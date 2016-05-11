// init.js
/* This file is used to initialise page load events for the job listing application */


/* When the Add Job page is loaded bind a click
   event to the Add submit button. */ 

$(document).on("pageinit", "#addJob", function(){

  // Prevent the default behaviour of the submit button 
  
  $("#addJobForm").on("submit",function(e){
    e.preventDefault();
    addJob();
  });
});
$(document).on("pageinit", "#addScholar", function(){

  // Prevent the default behaviour of the submit button 
  
  $("#addScholarForm").on("submit",function(e){
    e.preventDefault();
    addScholarship();
  });
});
$(document).on("pageinit", "#addInternship", function(){

  // Prevent the default behaviour of the submit button 
  
  $("#addInternshipForm").on("submit",function(e){
    e.preventDefault();
    addInternship();
  });
});


