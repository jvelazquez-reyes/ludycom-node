const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");

// isAuthenticated would be use to protect routes, but not working at the moment
exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  console.log(res.cookies['token'])
  const { token } = req.cookies['token'];
  if (!token) {
    return next(new ErrorHandler("Please login to continue", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  //req.user = await User.findById(decoded.id);

  next();
});
