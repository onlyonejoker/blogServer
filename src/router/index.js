const home = require("./home");
const login = require("./login");
let api = { home, login };
module.exports = function (app) {
  for (const key in api) {
    app.use(api[key]);
  }
};
