const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");

// isAuthenticated would be use to protect routes, but not working at the moment
exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please login to continue", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  //req.user = await User.findById(decoded.id);
  queryPromise = () => {
    return new Promise((resolve, reject) => {
      pool.query("DELETE FROM users WHERE id = ?",
      [decoded.id], (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      });
    });
  };

  const user = await queryPromise();
  console.log(user)

  next();
});
