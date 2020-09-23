"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  afterCreate() {
    fetch(process.env.DEPLOY_HOOK, {
      method: "POST",
    });
  },
};
