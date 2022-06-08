const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send("/home-ubuntu");
});


module.exports = router;