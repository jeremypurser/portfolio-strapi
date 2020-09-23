const fetch = require("node-fetch");

function deploy() {
  console.log("------ deploy hook -----");
  fetch(process.env.DEPLOY_HOOK, {
    method: "POST",
  });
}

module.exports = deploy;
