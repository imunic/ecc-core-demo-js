const router = require("express").Router();
const validator = require("../plumbing/validator");

const countryService = require("../service/country");
const countryValidator = require("../validator/country");

router.post("/", validator.body(countryValidator.country), async (req, res) => {
  const country = countryService.save(req.body);
  res.json(country);
});

router.put("/", validator.body(countryValidator.country), async (req, res) => {
  const country = countryService.save(req.body);
  res.json(country);
});

router.get("/", async (req, res) => {
  const countries = countryService.list();
  res.json(countries);
});

router.get("/:id", validator.params(countryValidator.get), async (req, res) => {
  const country = countryService.get(req.params.id);
  res.json(country);
});

router.delete(
  "/:id",
  validator.params(countryValidator.delete),
  async (req, res) => {
    countryService.delete(req.params.id);
    res.status(204).json(null);
  }
);

module.exports = router;
