'use strict';

process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server');
const knex = require('../knex');


describe('***SUITE HEADER***', () => {

    describe('user homepage', () => {

        it('should display users name', (done) => {
            request(app).get('/users/1')
                .expect(200)
                .end(function(err,res){
                    if (err) {
                        done(err)
                    }
                    expect(res.text).to.include('<h1>Welcome, Tim!');
                    done();
                })
        })

        it('User Story 2', (done) => {
            done();
        })

    });

});
