const express = require("express");
const app = express();
const mongoose = require("mongoose");
const contactRoutes = require("./routes/contactRoutes");
const homeRoutes = require("./routes/homeRoutes");
const newsletterRoutes = require("./routes/newsletterRoutes");
const productsRoutes = require("./routes/productsRoutes");
const PORT = 8000;
// Copy the DBUri from your mongodb account and paste it down here
const dbURI = "mongodb+srv://@node-project.f915wjt.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI)
  .then(result => app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  }))
  .catch(err => console.log(err))


app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

app.use("/", homeRoutes);
app.use("/products", productsRoutes);
app.use("/newsletter", newsletterRoutes);
app.use("/contact", contactRoutes);

app.use((req, res) => {
  res.render("404", { title: "404" });
});

