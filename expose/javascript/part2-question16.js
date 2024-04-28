let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2,
};
for (let property in statistics) {
  let value = statistics[property];
  if (property.startsWith('r') || value % 2 == 1) { //upper and lower is not specified so I just stuck with lower
    console.log(value);
  }
}
