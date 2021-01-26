const timeStamp = () => {
  const pad = (num) => {
    if (num < 10) {
      return `${"0" + num}`;
    } else {
      return num;
    }
  };
  const currentDate = new Date();
  const dayOfMonth = pad(currentDate.getDate());
  const month = pad(currentDate.getMonth() + 1);
  const year = pad(currentDate.getFullYear());
  const dateString = `${dayOfMonth}-${month}-${year}`;
  const timeString = `${pad(currentDate.getHours())}:${pad(
    currentDate.getMinutes()
  )}:${pad(currentDate.getSeconds())}`;
  return `${dateString} ${timeString}`;
};

const logger = (req, res, next) => {
  if (res.headerSent) {
    console.log(
      `${timeStamp()} ${req.method} ${req.originalUrl} ${res.statusCode}`
    );
  } else {
    res.on("finish", () => {
      console.log(
        `${timeStamp()} ${req.method} ${req.originalUrl} ${res.statusCode}`
      );
    });
  }

  next();
};

module.exports = logger;
