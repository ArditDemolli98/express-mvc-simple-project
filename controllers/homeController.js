module.exports = {
  getHomeView: (req, res) => {
    res.render("home", { title: "Home" });
  },
};
