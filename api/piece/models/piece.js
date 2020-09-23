"use strict";
const fetch = require("node-fetch");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const deploy = require("../../../util/deploy-hook");

module.exports = {
  lifecycles: {
    afterCreate() {
      deploy();
    },
    afterUpdate() {
      deploy();
    },
    afterDelete() {
      deploy();
    },
  },
};
