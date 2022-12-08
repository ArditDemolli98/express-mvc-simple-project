module.exports = {
  getNewsletterView: (req, res) => {
    res.render("newsletter", { title: "Newsletter" });
  },
};
