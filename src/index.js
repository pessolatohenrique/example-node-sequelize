const express = require("express");
const routes = require("./routes");
// necessary to load strategies
require("./auth/strategies");

const app = express();
routes(app);

app.use((error, req, res, next) => {
  console.log("error", error);
  if (error.name === "SequelizeValidationError") {
    res.status(400).json(error);
    return next();
  }

  res.status(error.getStatusCode()).json({ message: error.message });
  return next(error);
});

app.listen(3000, () => console.log("Server Started"));

module.exports = app;
