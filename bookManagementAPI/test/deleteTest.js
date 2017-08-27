let mongoose = require("mongoose");
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let Book = require('../api/models/bookModel');
let should = chai.should();
chai.use(chaiHttp);
describe('/DELETE/:id book', () => {
    it('it should DELETE a book given the id', (done) => {
      let book = new Book({title: "The Chronicles of Narnia delete Test", author: "C.S. Lewis", year: 1948, pages: 778})
      book.save((err, book) => {
              chai.request(server)
              .delete('/books/' + book.id)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.have.property('message').eql('Book successfully deleted');
                done();
              });
        });
    });
    it('it should DELETE a book given the id', (done) => {
            chai.request(server)
                .delete('/books/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('message').eql('All Books successfully deleted');
                done();
                });
          });
});