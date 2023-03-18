var express = require('express');
var router = express.Router();
const dbconfig   = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

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

app.get('/timerlist', (req, res) => {
  connection.query('SELECT * from timer_list', (error, rows) => {
    if (error) throw error;
    console.log('timer list is: ', rows);
    res.send(rows);
  });
});

module.exports = router;
