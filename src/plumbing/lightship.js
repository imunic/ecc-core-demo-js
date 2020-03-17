const {createLightship} = require("lightship");
const whyIsNodeRunning = require("why-is-node-running");
const logger = require("./logger");

const lightship = createLightship();

function registerShutdownHandler(app) {
  lightship.registerShutdownHandler(() => {
    app.close();
    whyIsNodeRunning(logger);
  });
}

module.exports = {
  lightship,
  registerShutdownHandler,
};
