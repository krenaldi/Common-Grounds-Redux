const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth");
const profileRoutes = require("./profile-routes");

router.get('/user', (req, res) => {
  console.log("getting user data");
  res.send(req.user);
});

// API Routes
router.use("/api", apiRoutes);
router.use("/auth", authRoutes);
router.use("/profile", profileRoutes)

// If no API routes are hit, send the React app

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
