const express = require("express");
const homeRoutes = require("./routes/homeRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const blogsRoutes = require("./routes/blogsRoutes");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoutes);
app.use("/about", aboutRoutes);
app.use("/blogs", blogsRoutes);
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

module.exports = app;
