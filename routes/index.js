var express = require('express');
var router = express.Router();
const insta = require("insta-package");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/info',async function(req,res){
  const p = JSON.stringify(req.query.url);
  console.log(p)
  async function test(url) {
    try {
      const result = await insta(url);
      console.log(result);
      res.render('download', {data: result});
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  test(p);
})


module.exports = router;
