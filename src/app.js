const express = require("express");
const morgan = require("morgan");

const config = require("./config");
const { lightship, registerShutdownHandler } = require("./plumbing/lightship");
const logger = require("./plumbing/logger");

// express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined", { stream: logger.stream }));

// routes
app.use("/", require("./routes/index"));

registerShutdownHandler(app);

module.exports = app.listen(config.port, () => {
  lightship.signalReady();
  logger.info(`Started app on port ${config.port}`);
});
