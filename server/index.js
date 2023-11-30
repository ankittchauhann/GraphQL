const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

const startServer = require("./startup/apolloServer");

const app = express();

app.use(
  morgan("combined", {
    stream: fs.createWriteStream(path.join(__dirname, "./logs/access.log"), {
      flags: "a",
    }),
  })
);

require("./startup/logging")(app);
require("./startup/cors")(app);
require("./startup/helmet")(app);
require("./startup/db")(app);

startServer(app);
