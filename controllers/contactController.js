module.exports = {
  getContactView: (req, res) => {
    res.render("contact", { title: "Contact" });
  },
};
