const prodKeys = {
  mongoURI: process.env.MONGO_PROD,
  jwtSecret: process.env.JWT_SECRET,
};

const devKeys = {
  mongoURI: process.env.MONGO_DEV,
  jwtSecret: process.env.JWT_SECRET,
};

if (process.env.NODE_ENV === "production") {
  module.exports = prodKeys;
} else {
  module.exports = devKeys;
}
