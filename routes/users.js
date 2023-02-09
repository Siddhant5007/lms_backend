var express = require("express");
var router = express.Router();
const user = require("../controller/user");

/* GET users listing. */
router.get("/getAllUsers", async (req, res, next) =>
  user.getAllUser(req, res, next)
);

// get user by id
router.get("/getUserDetails", async (req, res, next) =>
  user.getUserById(req, res, next)
);

// create user
router.post("/createUser", async (req, res, next) =>
  user.createUser(req, res, next)
);

module.exports = router;
