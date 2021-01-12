const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const logger = require('morgan')
var cors = require('cors')

const router = require('./server/routes/main')
// set up dependencies
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// set up mongoose
mongoose.connect("mongodb+srv://admin:123456ABC@student.zbgcq.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });

// set up port
const port = 3001;
// set up route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project with Nodejs Express and MongoDB',
  });
});
app.use('/api/', router);
app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});