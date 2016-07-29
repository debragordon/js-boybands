// Instructions

// Loop through the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p. etc...)

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];

var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

var bandElement = document.getElementById("boy-bands");

var veggieElement = document.getElementById("vegetables");

var loopCount = bands.length;

var currentBand = 0;

var currentVeggie = 0;

for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  bandElement.innerHTML += "<p>" + bands[loopTracker] + "</p>";
  currentBand++;
  console.log("on band " + currentBand);
  veggieElement.innerHTML += "<p>" + vegetables[loopTracker] + "</p>";
  currentVeggie++;
  console.log("on veggie " + currentVeggie);
}

// for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
//   veggieElement.innerHTML += "<p>" + vegetables[loopTracker] + "</p>";
//   currentVeggie++;
//   console.log("on veggie " + currentVeggie);
// }