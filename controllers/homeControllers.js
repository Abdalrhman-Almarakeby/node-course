const Blog = require("../models/blog");

function getHomeBlogs(req, res) {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      res.render("index", { title: "Home", blogs });
    })
    .catch((err) => console.log(err));
}

module.exports = {
  getHomeBlogs,
};
