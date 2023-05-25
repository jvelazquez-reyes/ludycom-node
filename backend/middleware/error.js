const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal server Error"

    // wrong jwt error
    if (err.name === "JsonWbToken") {
        const message = `Your url is invalid, please try again later`;
        err = new ErrorHandler(message, 400);
    };

    // jwt expired
    if (err.name === "TokenExpiredError") {
        const message = `Your URL is expired, please try again later!`;
        err = new ErrorHandler(message, 400);
    };

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};