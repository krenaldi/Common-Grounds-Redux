const router = require("express").Router();
const groupController = require("../../controllers/groupController");

// Matches with "/api/group"
router.route("/")
  .get(groupController.GetAllGroups)
  .post(groupController.CreateGroup);

// Matches with "/api/group/:id"
router
  .route("/:groupname")
  .get(groupController.deleteGroup)
  .put(groupController.updateGroup)


module.exports = router;
