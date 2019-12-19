const csv = require('csvtojson');
const SpeedDate = require('../models/SpeedDate');
const csvFileName = 'Speed-Dating-Data.csv';

const castToNumbers = jsonArray => {
  jsonArray.forEach(speedDate => {
    for(let key in speedDate) {
      if(!isNaN(+speedDate[key]))
        speedDate[key] = +speedDate[key];
    }
  });
  return jsonArray;
};

const seedData = async() => {
  let jsonArray = await csv().fromFile(__dirname + '/../../' + csvFileName);
  // eslint-disable-next-line no-console
  console.log('Seeding ' + jsonArray.length + ' items');
  jsonArray = castToNumbers(jsonArray);
  await SpeedDate.create(jsonArray);
};

module.exports = {
  castToNumbers,
  seedData
};
