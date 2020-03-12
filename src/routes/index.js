const router = require("express").Router();
const logger = require("../plumbing/logger");

router.get("/", async (req, res, next) => {
  try {
    res.json({ message: "Hello World" })
  } catch (e) {
    logger.error(e);
    next(e);
  }
});

module.exports = router;
