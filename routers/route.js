const express = require("express");
const router = express.Router();
const { addCount, decreaseCount } = require('../controller/counterController')


router.get('/add-count', addCount)
router.get('/decrease-count', decreaseCount)
router.all("/*", function (req, res) {
    res
        .status(404)
        .send({ status: false, msg: "The api you requested is not available" });
});
module.exports = router;