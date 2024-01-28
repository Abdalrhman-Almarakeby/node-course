const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const dbURI = process.env.DB_URI;
const port = process.env.PORT || 3000;

mongoose
  .connect(dbURI)
  .then((res) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      res.render("index", { title: "Home", blogs });
    })
    .catch((err) => console.log(err));
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);

  blog.save().then(() => {
    res.redirect("/");
  });
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then((blog) => {
      res.render("blog", { title: "d", blog });
    })
    .catch((err) => console.log(err));
});

app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id).then((result) => {
    res.send({ redirect: "/" });
  });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
