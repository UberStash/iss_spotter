const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function(passTimes) {
  console.log(passTimes);
  for (let pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes([passTimes]);
  })
  .catch((error) => {
    console.log("It donut work: ", error.message);
  });

module.exports = { nextISSTimesForMyLocation };