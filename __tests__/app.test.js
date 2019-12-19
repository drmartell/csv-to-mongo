require('dotenv').config();
const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const SpeedDate = require('../lib/models/SpeedDate');

describe('SpeedDate routes', () => {
  
  beforeAll(() => connect());

  beforeEach(() => mongoose.connection.dropDatabase());

  let speedDate;

  beforeEach(async() => {
    speedDate = await SpeedDate.create({

    });
  });

  it('can create a new speedDate', () => {
    return request(app)
      .post('/api/v1/speed-dates')
      .send({

      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),

          __v: 0
        });
      });
  });

  it('gets a speed date by id', () => {
    return request(app)
      .get(`/api/v1/speed-dates/${speedDate.id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: speedDate.id,

          tagline: '!!',
          __v: 0
        });
      });
  });

  it('get all speed dates', () => {
    return request(app)
      .get('/api/v1/speed-dates')
      .then(res => {
        expect(res.body).toEqual([
          {
            _id: speedDate.id,

            __v: 0
          }
        ]);
      });
  });

  it('updates a speedDate', () => {
    return request(app)
      .patch(`/api/v1/speed-dates/${speedDate.id}`)
      .send({ zipcode: 97201 })
      .then(res => {
        expect(res.body).toEqual({
          _id: speedDate.id,

          __v: 0
        });
      });
  });

  it('deletes a speed date', () => {
    return request(app)
      .delete(`/api/v1/speed-dates/${speedDate.id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: speedDate.id,

          __v: 0
        });
      });
  });
});

afterAll(() => mongoose.connection.close());
