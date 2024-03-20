var express = require("express");
var router = express.Router();
var modules = require("../modules");
let { HttpStatus } = modules;
/* GET users listing. */
router.get("/", function (req, res, next) {
  return res.status(HttpStatus.OK).send({
    statusCode: HttpStatus.OK,
    success: true,
    message: "success",
  });
});

module.exports = router;
