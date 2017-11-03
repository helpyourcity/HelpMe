const express = require("express");
const morgan = require("morgan");
const bp = require("body-parser");
const app = express();

// DATABASE
const db = require("./models");

const PORT = process.env.PORT || 8080;

// ROUTERS
const location = require("./routes/location.js");
const message = require("./routes/message.js");
// const rescue = require('./routes/rescue.js');
const user = require("./routes/user.js");

// this is middleware that is a logging framework, it logs when we get requests good for debugging
app.use(morgan("combined"));
app.use(
  bp.json({
    type: "*/*"
  })
);
// app.use(bp.urlencoded());

// PUBLIC STATIC FILES
app.use(express.static("public"));

// ROUTES
app.use("/api/location", location);
app.use("/api/message", message);
// app.use("/api/rescue", rescue);
app.use("/api/user", user);

// I dont think we need this, make a case for that
// this is for getting help requests.
// app.get('/api/help_requests', function (req, res) {
// })

const server = app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`SERVER: helpme running on ${PORT}`);
});
