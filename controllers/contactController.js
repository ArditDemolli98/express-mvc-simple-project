const path = require("path");

exports.getContactView = (request, response) => {
  response.sendFile(path.join(__dirname, "../views/contact.html"));
};
