const express = require("express");
const blogsControllers = require("../controllers/blogsControllers");

const router = express.Router();

router.post("/", blogsControllers.createBlog);
router.get("/create", blogsControllers.renderCreateBlog);
router.get("/:id", blogsControllers.renderBlog);
router.delete("/:id", blogsControllers.deleteBlog);

module.exports = router;
