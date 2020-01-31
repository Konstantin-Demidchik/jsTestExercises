const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    "origin": "*",
    "methods": "GET,PUT,POST,DELETE",
    "preflightContinue": false,
}));

// генерация html на локальном сервере по адресу http://localhost:8080/task1.html
app.use('/', express.static(process.cwd() + '/src/task1'));
// генерация html на локальном сервере по адресу http://localhost:8080/task2.html
app.use('/', express.static(process.cwd() + '/src/task2'));

// для task3 первый запрос с искуственной задержкой для тестирования
app.get('/first', (req, res, next) => {
  setTimeout(() => res.send('Первый запрос!'), 2000)

});
// для task3 второй запрос
app.get('/second', (req, res, next) => {
  res.send('Второй запрос!');
});

const server = app.listen(8080, () => {
  console.log('Server is started');
});
