var express = require('express');
const { Controller } = require('./controller');
var app = express();

var controller = new Controller();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/todos', function(req, res) {
  const todos = ['']; // fetch from google calendar API
  res.send(controller.getTask);
})

app.post('/todos/create', function(req, res) {
  // create todo
  const status = 200;
  res.send(controller.createTask)
})

app.post('/todos/delete', function(req, res) {
  // create todo
  const status = 200;
  res.send(controller.deleteTask)
})

app.post('/todos/update', function(req, res) {
  // create todo
  const status = 200;
  res.send(controller.updateTask)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
