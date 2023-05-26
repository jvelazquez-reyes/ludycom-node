const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler");
const { isAuthenticated } = require("../middleware/auth");
const { pool } = require("../db");

// create new user
router.post(
  "/users-post",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { names, surnames, birthdate, email, document, code, salary, status } = req.body;

      queryPromise = () => {
        return new Promise((resolve, reject) => {
          pool.query("INSERT INTO users (names, surnames, birthdate, email, document, code, salary, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
          [names, surnames, birthdate, email, document, code, salary, status], (err, res) => {
            if (err) {
              return reject(err);
            }
            return resolve(res);
          });
        });
      };

      const user = await queryPromise();

      res.status(201).json({
        success: true,
        user,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// get all radioactive sources
router.get(
  "/all-users",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      queryPromise = () => {
        return new Promise((resolve, reject) => {
          pool.query("SELECT * FROM users", (err, res) => {
            if (err) {
              return reject(err);
            }
            return resolve(res);
          });
        });
      };

      const users = await queryPromise();

      res.status(201).json({
        success: true,
        users,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// delete radSource of collection
router.delete(
  "/user-delete/:id",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { id } = req.params;

      queryPromise = () => {
        return new Promise((resolve, reject) => {
          pool.query("DELETE FROM users WHERE id = ?",
          [id], (err, res) => {
            if (err) {
              return reject(err);
            }
            return resolve(res);
          });
        });
      };

      const user = await queryPromise();

      res.status(201).json({
        success: true,
        message: "The user has been deleted successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// update radSource of collection
router.put(
  "/users-update/:id",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const {
        names,
        surnames,
        birthdate,
        email,
        document,
        code,
        salary,
        status,
        id,
      } = req.body;

      queryPromise = () => {
        return new Promise((resolve, reject) => {
          pool.query("UPDATE users SET names = ?, surnames = ?, birthdate = ?, email = ?, document = ?, code = ?, salary = ?, status = ? WHERE id = ?",
          [names, surnames, birthdate, email, document, code, salary, status, id], (err, res) => {
            if (err) {
              return reject(err);
            }
            return resolve(res);
          });
        });
      };

      const user = await queryPromise();

      res.status(201).json({
        success: true,
        message: "The user has been updated successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
)

module.exports = router;
