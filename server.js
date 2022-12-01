const express = require('express');
const app = express();
const contactController = require('./controllers/contactController');
const homeController = require('./controllers/homeController');
const newsletterController = require('./controllers/newsletterController');
const productsController = require('./controllers/productsController');
const PORT = 8000

app.use(express.static("public"));

app.get('/', homeController.getHomeView)
app.get('/contact', contactController.getContactView)
app.get('/newsletter', newsletterController.getNewsletterView)
// app.get('/products', productsController.getProductsView)
app.use("/products", productsController);


app.listen(PORT, () => {
    console.log(`Server is running one port: ${PORT}`)
})