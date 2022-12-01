const path = require('path');

exports.getNewsletterView = (request,response) => {
    response.sendFile(path.join(__dirname, "../views/newsletter.html"));
}

