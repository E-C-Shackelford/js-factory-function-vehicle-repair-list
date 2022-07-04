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
