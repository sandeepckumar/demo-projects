const prodKeys = {
  mongoURI: process.env.MONGO_PROD,
  jwt_token: process.env.JWT_SECRET,
};

const devKeys = {
  mongoURI: process.env.MONGO_DEV,
  jwt_token: process.env.JWT_SECRET,
};

if (process.env.NODE_ENV === "production") {
  module.exports = prodKeys;
} else {
  module.exports = devKeys;
}
