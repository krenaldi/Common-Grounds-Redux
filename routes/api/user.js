const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/register"
router.route("/")
  .get(userController.GetAllUser)
  .post(userController.AddUser);

// Matches with "/api/users/:id"
router
  .route("/:username")
  .get(userController.deleteUser)
  .put(userController.updateUser)


module.exports = router;
