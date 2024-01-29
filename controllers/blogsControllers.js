const Blog = require("../models/blog");

function renderCreateBlog(req, res) {
  res.render("create", { title: "Create a new blog" });
}

function createBlog(req, res) {
  const blog = new Blog(req.body);

  blog
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
}

function renderBlog(req, res) {
  const id = req.params.id;

  Blog.findById(id)
    .then((blog) => {
      res.render("blog", { title: blog.title, blog });
    })
    .catch((err) => console.log(err));
}

function deleteBlog(req, res) {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.send({ redirect: "/" });
    })
    .catch((err) => console.log(err));
}

module.exports = {
  renderCreateBlog,
  createBlog,
  renderBlog,
  deleteBlog,
};
