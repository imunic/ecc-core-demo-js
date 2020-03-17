const logger = require("../plumbing/logger");

class CountryService {
  constructor() {
    this.countries = [];
  }

  save(country) {
    logger.debug(`CountryService save`);

    if (country.id) {
      if (country.id > this.countries.length) {
        throw new Error("NOT_FOUND");
      }
      this.countries[country.id] = country;
      return country;
    }
    const c = {
      ...country,
      id: this.countries.length,
    };

    this.countries.push(c);

    return c;
  }

  list() {
    logger.debug(`CountryService list`);
    return this.countries;
  }

  get(id) {
    logger.debug(`CountryService get ${id}`);

    const country = this.countries.find(c => c.id === id);

    if (!country) {
      throw new Error("NOT_FOUND");
    }
    return country;
  }

  delete(id) {
    logger.debug(`CountryService delete ${id}`);
    this.countries = this.countries.filter(c => c.id !== id);
  }
}

module.exports = new CountryService();
