const express = require("express");
const homeControllers = require("../controllers/homeControllers");

const router = express.Router();

router.get("/", homeControllers.getHomeBlogs);

module.exports = router;
