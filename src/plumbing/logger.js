const winston = require("winston");

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console({ colorize: true }),
  ],
});

logger.stream = {
  write: message => {
    logger.info(message);
  },
};

module.exports = logger;
