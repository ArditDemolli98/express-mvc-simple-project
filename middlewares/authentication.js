module.exports = {
  authenticate: (req, res, next) => {
    console.log("authenticated");
    next();
  },
};
