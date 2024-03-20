var express = require("express");
var router = express.Router();
var HttpStatus = require("../modules/status_codes");
/* GET users listing. */
router.get("/", function (req, res, next) {
  return res.status(HttpStatus.OK).send({
    statusCode: HttpStatus.OK,
    success: true,
    message: "success",
  });
});

module.exports = router;
