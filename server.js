const express = require('express');
const app = express();
const photos = require('./public/photos')
const movies = require('./public/data.js')

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(express.static('public'));

app.use(urlLogger, timeLogger);

app.get('/', (request, response) => {
});

app.listen(3000, () => {
  console.log('Express Intro running on localhost:3000');
});

app.get('/json', (request, response) => {
  response.status(200).json(movies);
});

app.get('/sunsets', (request, response) => {
  response.sendFile('sunsets.html', { root: 'public' });
})

app.use('/sunsets', express.static('/public/images'))
