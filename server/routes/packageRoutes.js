const express = require("express");
const router = express.Router();
const {
  createPackage,
  getPackages,
  getPackageById,
  updatePackage,
  deletePackage,
} = require("../controllers/packageController");
const { authenticate } = require("../middlewares/authMiddleware");

// Public: Get all packages or by ID
router.get("/", getPackages);
router.get("/:id", getPackageById);

// Company only: Add, update, delete package
router.post("/", authenticate, createPackage);
router.put("/:id", authenticate, updatePackage);
router.delete("/:id", authenticate, deletePackage);

module.exports = router;
