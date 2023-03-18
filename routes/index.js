var express = require('express');
var router = express.Router();
// const dbconfig   = require('./config/database.js');
var mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'svc.sel3.cloudtype.app:31727',
  user     : 'holdem',
  password : 'Qswer!23',
  database : 'timer'
});

const app = express();
app.set('port', 3000);

connection.connect();



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
  
  connection.query('SELECT * from timer_list', (error, rows, fields) => {
//    if (error) throw error;
    console.log('timer list is: ', rows);
    res.send(rows);
  });
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = router;
