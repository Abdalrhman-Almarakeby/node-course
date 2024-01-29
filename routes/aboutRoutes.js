const express = require("express");
const aboutControllers = require("../controllers/aboutControllers");

const router = express.Router();

router.get("/", aboutControllers.renderAbout);

module.exports = router;
