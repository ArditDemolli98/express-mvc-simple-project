const path = require('path');

exports.getHomeView = (request,response) => {
    response.sendFile(path.join(__dirname, "../views/home.html"));
}

