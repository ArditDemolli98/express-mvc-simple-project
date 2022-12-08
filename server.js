const express = require("express");
const app = express();
const contactRoutes = require("./routes/contactRoutes");
const homeRoutes = require("./routes/homeRoutes");
const newsletterRoutes = require("./routes/newsletterRoutes");
const productsRoutes = require("./routes/productsRoutes");
const PORT = 8000;

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/", homeRoutes);
app.use("/products", productsRoutes);
app.use("/newsletter", newsletterRoutes);
app.use("/contact", contactRoutes);

app.use((req, res) => {
  res.render("404", { title: "404" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
