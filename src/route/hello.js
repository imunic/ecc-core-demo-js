const router = require("express").Router();

router.get("/", async (req, res) => {
  const name = req.query.name || "Stranger";
  res.json(`Hello ${name}!`);
});

module.exports = router;
