const express = require("express");
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middleware/auth");
const { pool } = require("../db");

// login user
router.post(
  "/login-user",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { username, password } = req.body;

      // Check if all the required fields are provided
      if (!username || !password) {
        return next(new ErrorHandler("Please provide all fields!", 400));
      }

      // Query to get default user
      queryPromise = () => {
        return new Promise((resolve, reject) => {
          pool.query("SELECT * FROM user", (err, res) => {
            if (err) {
              return reject(err);
            }
            return resolve(res);
          });
        });
      };

      const user = await queryPromise();

      if (!user) {
        return next(new ErrorHandler("User doesn't exists!", 400));
      }

      if (user[0].name !== username && !user[0].password !== password) {
        return next(
          new ErrorHandler("Please provide the correct information", 400)
        );
      } else {
        // The token is successfully generated
        const id = user[0].id;
        const token = jwt.sign({ id: id }, process.env.JWT_SECRET_KEY, {
          expiresIn: process.env.JWT_EXPIRES,
        });

        // Attempt to set auth credentials in cookies
        const cookiesOptions = {
          expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
          ),
          httpOnly: true,
        };
        res.cookie("token", token, cookiesOptions);
        res.status(200).json({
          success: true,
          user,
          token,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// load user
router.get(
  "/getuser",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);

      if (!user) {
        return next(new ErrorHandler("User doesn't exists", 400));
      }

      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// log out user (not implemented at the moment)
router.get(
  "/logout",
  catchAsyncErrors(async (req, res, next) => {
    try {
      res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      });
      res.status(201).json({
        success: true,
        message: "Log out successful!",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;
