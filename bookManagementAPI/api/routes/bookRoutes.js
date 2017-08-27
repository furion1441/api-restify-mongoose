'use strict';
module.exports = function(app) {
  var bookAPI = require('../controllers/bookController');

  // bookApi Routes
  app.route('/books')
    .get(bookAPI.list_all_books)
    .post(bookAPI.create_a_book)
    .delete(bookAPI.delete_all_books);


  app.route('/books/:bookId')
    .get(bookAPI.read_a_book)
    .put(bookAPI.update_a_book)
    .delete(bookAPI.delete_a_book);
};