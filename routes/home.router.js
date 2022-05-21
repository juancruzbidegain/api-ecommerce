const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send("SV Running home.router.js");
});


module.exports = router;