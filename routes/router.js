const express = require("express");
const controller = require("../controller/controller");
const router = express.Router();

router.get("/getuser",controller.demo);

module.exports = router;