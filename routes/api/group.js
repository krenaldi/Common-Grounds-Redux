const router = require("express").Router();
const groupController = require("../../controllers/groupController");

// Matches with "/api/register"
router.route("/")
  .get(groupController.GetAllGroups)
  .post(groupController.CreateGroup);

// Matches with "/api/users/:id"
router
  .route("/:username")
  .get(groupController.deleteGroup)
  .put(groupController.updateGroup)


module.exports = router;
