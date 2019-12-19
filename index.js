// const mongoose = require('mongoose');
// const csv = require('csvtojson');

// mongoose.connect('mongodb://localhost:27017/speedDatingSurvey', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });

// const Date = mongoose.model('Date', schema);
// const csvFilePath = './Speed-Dating-Data.csv';

// (async() => {
//   await mongoose.connection.dropDatabase();
//   const jsonArray = await csv().fromFile(csvFilePath);
//   // eslint-disable-next-line no-console
//   await console.log(jsonArray.length + ' items');
//   await Date.create(jsonArray);
//   await mongoose.connection.close();
//   // eslint-disable-next-line no-console
//   console.log('done');
// })();
