var express = require('express');
var router = express.Router();
var x =Math.floor(Math.random() * 20);

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.query.x!= null && req.query.x!=undefined) {
    x= req.query.x
  }
 var y = Math.abs(x);
    var y1 = Math.acos(x);
    var y2 = Math.sin(x);
    var y3 = Math.sinh(x);
    res.send("Math.abs() applied to "+x+" is "+y+"<br></br>"+"Math.acos() applied to "+x+" is "+y1+"<br></br>"+
                "Math.sin() applied to "+x+" is "+y2+"<br></br>"+
                "Math.sinh() applied to "+x+" is "+y3);
});

module.exports = router;