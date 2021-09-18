const express = require("express");
const routes = require("./routes");
const cors = require("cors");
// necessary to load strategies
require("./auth/strategies");

const app = express();
routes(app);

app.use(cors());
app.use((error, req, res, next) => {
  console.log("error", error);
  if (error.name === "SequelizeValidationError") {
    res.status(400).json(error);
    return next();
  }

  res.status(error.getStatusCode()).json({ message: error.message });
  return next(error);
});

app.listen(process.env.PORT || 3000);

module.exports = app;
