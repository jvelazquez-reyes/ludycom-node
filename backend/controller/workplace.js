const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler");
const { isAuthenticated } = require("../middleware/auth");
const { pool } = require("../db");

// create workplace
router.post(
  "/workplace-post",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { code, name, manager, status } = req.body;

      queryPromise = () => {
        return new Promise((resolve, reject) => {
          pool.query("INSERT INTO workplace (code, name, manager, status) VALUES (?, ?, ?, ?)",
          [code, name, manager, status], (err, res) => {
            if (err) {
              return reject(err);
            }
            return resolve(res);
          });
        });
      };

      const workplace = await queryPromise();

      res.status(201).json({
        success: true,
        workplace,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// get all workplaces
router.get(
  "/all-workplaces",
  catchAsyncErrors(async (req, res, next) => {
    try {
      queryPromise = () => {
        return new Promise((resolve, reject) => {
          pool.query("SELECT * FROM workplace", (err, res) => {
            if (err) {
              return reject(err);
            }
            return resolve(res);
          });
        });
      };

      const workplace = await queryPromise();

      res.status(201).json({
        success: true,
        workplace,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// delete workplace
router.delete(
  "/workplace-delete/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { id } = req.params;

      queryPromise = () => {
        return new Promise((resolve, reject) => {
          pool.query("DELETE FROM workplace WHERE id = ?",
          [id], (err, res) => {
            if (err) {
              return reject(err);
            }
            return resolve(res);
          });
        });
      };

      const workplace = await queryPromise();

      res.status(201).json({
        success: true,
        message: "The workplace has been deleted successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// update workplace
router.put(
  "/workplace-update/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const {
        code,
        name,
        manager,
        status,
        id,
      } = req.body;

      queryPromise = () => {
        return new Promise((resolve, reject) => {
          pool.query("UPDATE workplace SET code = ?, name = ?, manager = ?, status = ? WHERE id = ?",
          [code, name, manager, status, id], (err, res) => {
            if (err) {
              return reject(err);
            }
            return resolve(res);
          });
        });
      };

      const workplace = await queryPromise();

      res.status(201).json({
        success: true,
        message: "The workplace has been updated successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
)

module.exports = router;
