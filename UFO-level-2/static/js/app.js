// from data.js
var ufoData = data;
console.log(ufoData);

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn")
var date = d3.select("#datetime");
var state = d3.select("#state");
var city = d3.select("#city");
var country = d3.select("#country");
var shape = d3.select("#shape");

//=========All Values====================\\
// UFO Sighting values for each column

ufoData.forEach(function (theyarehere) {
  //tbody.html("");
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

//=========Buttons====================\\
// UFO Sighting values for each entered Buttons
button.on("click", function () {
  tbody.html("");
  console.log(ufoData);

  var dateValue = date.property("value");
  var stateValue = state.property("value");
  var cityValue = city.property("value");
  var countryValue = country.property("value");
  var shapeValue = shape.property("value");

  var filter = ufoData.filter(sighting => sighting.datetime === dateValue ||
    sighting.state === stateValue ||
    sighting.city === cityValue ||
    sighting.country === countryValue ||
    sighting.shape === shapeValue);

  console.log(filter)

  filter.forEach(function (allUfos) {
    console.log(allUfos)
    var allrow = d3.select("tbody").append("tr");
    Object.entries(allUfos).forEach(function ([key, value]) {
      var allDatafilter = allrow.append("td");
      allDatafilter.text(value)
      console.log(allDatafilter);

    });
  });
});

console.log(ufoData);


