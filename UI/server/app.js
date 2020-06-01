const express = require('express');
const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const HTTPS_PORT = process.env.HTTPS_PORT || 3443;
//const searching = require('./routes/searching');
const catalog = require('./routes/catalog');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS,POST,DELETE,PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Accept,Accept-Language,Content-Language,Content-Type');
  
  next();
});

app.get('/', (req, res, next) => {
  res.json({
    status: true,
    message: 'Up and running'
  });
  
  next();
});

app.use('/api/shop',catalog);

http.createServer(app).listen(PORT, () => {
  console.log('====================================');
  console.log('HTTP Server started!');
  console.log('====================================');
  console.log(`Port: ${PORT}`);
  console.log('====================================');
});

https.createServer({
  key: fs.readFileSync(path.join(__dirname, 'certs/server.key'), 'utf-8'),
  cert: fs.readFileSync(path.join(__dirname, 'certs/server.crt'), 'utf-8')
}, app).listen(HTTPS_PORT, () => {
  console.log('====================================');
  console.log('HTTPS Server started!');
  console.log('====================================');
  console.log(`Port: ${HTTPS_PORT}`);
  console.log('====================================');
});
