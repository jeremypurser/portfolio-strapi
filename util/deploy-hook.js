function deploy() {
  fetch(process.env.DEPLOY_HOOK, {
    method: "POST",
  });
}

module.exports = deploy;
