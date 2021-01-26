const dev_keys = require("./keys_dev");
const prod_keys = require("./keys_prod");

if (process.env.NODE_ENV === "production") {
  module.exports = prod_keys;
} else {
  module.exports = dev_keys;
}
