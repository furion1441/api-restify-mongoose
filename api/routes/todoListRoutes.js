'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  // app.route('/tasks')
  //   .get(todoList.list_all_tasks)
  //   .post(todoList.create_a_task);
  app.post('/tasks', todoList.create_a_task); //Create toDo API
  app.get('/tasks', todoList.list_all_tasks);  // Get All ToDO Details API


  // app.route('/tasks/:taskId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
  app.get('/tasks/:taskId', todoList.read_a_task);  // Get one ToDO Details API
  app.put('/tasks/:taskId', todoList.update_a_task);
  app.del('/tasks/:taskId', todoList.delete_a_task);
};