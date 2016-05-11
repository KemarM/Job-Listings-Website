// addJob.js
/* This library contains the function that adds the job to localStorage */


function addJob()
{
  try
  {
    // Create an object using the data from the form
    var Job =
    {
      name : $("#name").val(),
      description : $("#jobDescription").val()
    }

    // Add the object to localStorage using JSON (JavaScript Object Notation)
    
    localStorage[Job.name] = JSON.stringify(Job);

    alert ("Record successfully added.");

    // Clear the form
    $("#name").val("");
    $("#jobDescription").val("");
  }
  catch (e)
  {
    alert("An error has occurred while adding your place of interest.");
  }

}
function addScholarship()
{
  try
  {
    // Create an object using the data from the form
    var Scholarship =
    {
      scholarName : $("#myScholar").val(),
      scholarDescription : $("#scholarDescription").val()
    }

    // Add the object to localStorage using JSON (JavaScript Object Notation)
    
    localStorage[Scholarship.scholarName] = JSON.stringify(Scholarship);

    alert ("Record successfully added.");

    // Clear the form
    $("#myScholar").val("");
    $("#scholarDescription").val("");
  }
  catch (e)
  {
    alert("An error has occurred while adding your place of interest.");
  }

}
function addInternship()
{
  try
  {
    // Create an object using the data from the form
    var Internship =
    {
      internName : $("#internshipName").val(),
      internDescription : $("#internshipDescription").val()
    }

    // Add the object to localStorage using JSON (JavaScript Object Notation)
    
    localStorage[Internship.internName] = JSON.stringify(Internship);

    alert ("Record successfully added.");

    // Clear the form
    $("#internshipName").val("");
    $("#intrnshipDescription").val("");
  }
  catch (e)
  {
    alert("An error has occurred while adding your place of interest.");
  }

}
