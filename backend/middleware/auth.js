const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const { pool } = require("../db");

// isAuthenticated would be use to protect routes, but not working at the moment
exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please login to continue", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  queryPromise = () => {
    return new Promise((resolve, reject) => {
      pool.query("SELECT * FROM user WHERE id = ?",
      [decoded.id], (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      });
    });
  };

  req.user = await queryPromise();

  next();
});
