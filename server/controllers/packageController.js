const Package = require("../models/Package");

exports.createPackage = async (req, res) => {
  try {
    const newPackage = new Package({
      ...req.body,
      companyId: req.user.userId, // from authMiddleware
    });

    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPackages = async (req, res) => {
  try {
    const packages = await Package.find().populate("companyId", "name email");
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPackageById = async (req, res) => {
  try {
    const package = await Package.findById(req.params.id).populate(
      "companyId",
      "name email"
    );
    if (!package) return res.status(404).json({ message: "Package not found" });
    res.json(package);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatePackage = async (req, res) => {
  try {
    const pkg = await Package.findById(req.params.id);
    if (!pkg) return res.status(404).json({ message: "Package not found" });

    if (pkg.companyId.toString() !== req.user.userId)
      return res.status(403).json({ message: "Unauthorized" });

    Object.assign(pkg, req.body);
    await pkg.save();

    res.json(pkg);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletePackage = async (req, res) => {
  try {
    const pkg = await Package.findById(req.params.id);
    if (!pkg) return res.status(404).json({ message: "Package not found" });

    if (pkg.companyId.toString() !== req.user.userId)
      return res.status(403).json({ message: "Unauthorized" });

    await pkg.remove();
    res.json({ message: "Package deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
