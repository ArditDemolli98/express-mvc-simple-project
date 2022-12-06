const path = require("path");

exports.getErrorView = (request, response) => {
  response.sendFile(path.join(__dirname, "../views/404.html"));
};
