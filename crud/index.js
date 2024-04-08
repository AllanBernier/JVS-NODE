const express = require("express");
const path = require("path"); // Module standard de node js
const app = express();
const product_router = require("./router/productRouter")

app.listen(3000, () => {
    console.log("Serveur démarré (http://localhost:3000/) !");
});
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public"))); // Static file


app.use(product_router)
