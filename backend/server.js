require('dotenv').config()
let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

// Express Route
const mascotaRoute = require("../backend/routes/mascota.route")
const adoptaRoute = require('../backend/routes/adoptante.route')

// Connecting mongoDB Database
// mongoose.Promise = global.Promise;
// mongoose.connect(dbConfig.db, {
//   useNewUrlParser: true
// }).then(() => {
//   console.log('Database sucessfully connected!')
// },
//   error => {
//     console.log('Could not connect to database : ' + error)
//   }
// )
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/public', express.static(`${__dirname}/storage/imgs`))
app.use('/mascotas', mascotaRoute)
app.use('/adopta', adoptaRoute)

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(404);
  /* next(createError(404)); */
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
