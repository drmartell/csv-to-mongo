require('dotenv').config();
require('./lib/utils/connect')();
const mongoose = require('mongoose');
const { seedData } = require('./lib/utils/seed-data');

(async() => {
  await mongoose.connection.dropDatabase();
  await seedData();
  // eslint-disable-next-line no-console
  console.log('done');
  mongoose.connection.close();
})();
