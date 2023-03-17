var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

/**
 * @path http://localhost:3000/ 경로
 */
router.get("/timer/", (req, res) => {
    res.send("Hello World");
});

module.exports = router;
