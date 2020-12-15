// Assign variables for date and table body
var sightings = data;
var tbody = d3.select("tbody");

// Draw original (complete) table
sightings.forEach(function(event) {
    var row = tbody.append("tr");
    
    Object.entries(event).forEach(function([key, value]){
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("button");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the form (input)
  var inputElement = d3.select(".form-control");

  // Get the value from the form
  var inputValue = inputElement.property("value");

  // Print the input value to the console (verify that the select works)
  console.log(inputValue);

  // Create filteredData variable by filtering the original dataset by date
  var filteredData = sightings.filter(ufo_event => ufo_event.datetime === inputValue);

  // Print filteredData to the console to verify that it is working
  console.log(filteredData);

  // Clear the original table
  tbody.html("");

  // Redraw the table with filtered information (filteredData is the new dataset)
  filteredData.forEach(function(date_choice) {
    var row = tbody.append("tr");
    
    Object.entries(date_choice).forEach(function([key, value]){
        var cell = row.append("td");
        cell.text(value);
    });
  });

};

