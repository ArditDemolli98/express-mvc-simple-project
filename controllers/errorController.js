const path = require("path");

exports.getErrorView = (request, response) => {
  response.status(404).sendFile(path.join(__dirname, "../views/404.html"));
};
