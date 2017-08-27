let mongoose = require("mongoose");
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let Book = require('../api/models/bookModel');
let should = chai.should();
chai.use(chaiHttp);
describe('/PUT/:id book', () => {
    it('it should UPDATE a book given the id', (done) => {
      let book = new Book({title: "The Chronicles of Narnia Put Test", author: "C.S. Lewis", year: 1948, pages: 778})
      book.save((err, book) => {
              chai.request(server)
              .put('/books/' + book.id)
              .send({title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1950, pages: 778})
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message').eql('Book successfully updated');
                  res.body.book.should.have.property('year').eql(1950);
                done();
              });
        });
    });
});