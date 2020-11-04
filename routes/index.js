var express = require('express');
var router = express.Router();


var pictures = [
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/getPics", function(req, res, next) {
  res.json(pictures);
})

router.post("/sendPic", function(req, res, next) {
  pictures.push(req.body);
  res.json({
    status: "ok"
  });
})

module.exports = router;
