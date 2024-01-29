function renderAbout(req, res) {
  res.render("about", { title: "About" });
}

module.exports = {
  renderAbout,
};
