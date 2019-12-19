const { castToNumbers } = require('./seed-data');

describe('castToNumbers', () => {
  it('casts numbers stored as strings to numbers', () => {
    const singleObjArr = [{ id: 12, name: 'Drama', stringNumber: 99 }];
    const castObjArr = castToNumbers(singleObjArr);

    expect(castObjArr).toEqual([{ id: 12, name: 'Drama', stringNumber: 99 }]);
  });
});
