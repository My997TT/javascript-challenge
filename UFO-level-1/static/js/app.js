// from data.js
var ufoData = data;
console.log(ufoData);

var tbody = d3.select("tbody");

// UFO Sighting values for each column
ufoData.forEach(function (theyarehere) {
  console.log(theyarehere);
  // Append one table row `tr` for each UFO Sighting object
  var row = tbody.append("tr");
  // Use `Object.entries` to console.log each UFO Sighting value
  Object.entries(theyarehere).forEach(function ([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
  });
});

//
var button = d3.select("#filter-btn")
button.on("click", function () {
  tbody.html("");
  //d3.event.preventDefault();
 
  var date = d3.select("#datetime");
  var dateValue = date.property("value");
  //console.log(dateValue);
 
  var filter = ufoData.filter(sighting => sighting.datetime === dateValue);
  console.log(filter)
 
  filter.forEach(function (ufodates) {
    var daterow = d3.select("tbody").append("tr");
    Object.entries(ufodates).forEach(function ([key, value]) {
      var newData = daterow.append("td");
      newData.text(value)

    });
  });
});