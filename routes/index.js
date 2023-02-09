var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
  return "Hello";
});
module.exports = router;
