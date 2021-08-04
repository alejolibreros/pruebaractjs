require("dotenv").config();
let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
const passport = require("passport");

// Express Route
const users = require("./routes/users");
const mascotaRoute = require("./routes/mascota.route");
const adoptaRoute = require("./routes/adoptante.route");

const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/mascotas", mascotaRoute);
app.use("/adopta", adoptaRoute);
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
app.use("/users", users);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});
