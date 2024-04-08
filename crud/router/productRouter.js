const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
    //res.send("Bonjour le monde...");
    res.render("index");
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/data", (req, res) => {
    const test = {
        titre: "Test",
        items: ["un", "deux", "trois"]
    };
    res.render("data", { model: test });
});

module.exports = router
