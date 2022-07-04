const button = document.querySelector("button");
// select the unordered list
const repairList = document.querySelector(".need-repair");

// create a factory function and add three parameters
const createVehicle = function (type, numWheel, color) {
  // declare an object called vehicle with three properties and use the parameters as values
  const vehicle = {
    type: type,
    numWheel: numWheel,
    color: color,
  };
  return vehicle;
};

// create three new objects
const car = createVehicle("car", 4, "silver");
const bike = createVehicle("bike", 2, "blue");
const vespa = createVehicle("Vespa", 2, "grey");

// add the three objects to an array
const myVehicles = [car, bike, vespa];

// loop over the array of objects, then loop over the properties and values of each object, and log them out to the console
for (let vehicle of myVehicles) {
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
  }
}
