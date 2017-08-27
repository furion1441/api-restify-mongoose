let mongoose = require("mongoose");
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let Book = require('../api/models/bookModel');
let should = chai.should();
chai.use(chaiHttp);
  describe('/GET book', () => {
      it('it should GET all the books', (done) => {
        chai.request(server)
            .get('/books')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.at.least(0);
                done();
            });
      });
      it('it should give an error', (done) => {
        chai.request(server)
            .get('/book')
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.have.property('url').equal('/book not found fellow');
                done();
            });
      });
      it('it should GET a book by the given id', (done) => 
      {
        let book = new Book({ title: "The Lord of the Rings Test", author: "J.R.R. Tolkien Test", year: 1954, pages: 1170 });
        book.save((err, book) => 
        {
            chai.request(server)
            .get('/books/' + book.id)
            .send(book)
            .end((err, res) => 
            {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('title');
                res.body.should.have.property('author');
                res.body.should.have.property('pages');
                res.body.should.have.property('year');
                res.body.should.have.property('_id').eql(book.id);
              done();
            });
        });
     });
    });