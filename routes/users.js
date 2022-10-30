var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',(req,res)=> {
  return res.json({
    id:1,
    name:'Sapto Prasojo',
    role:'admin'
  })
})

// POST
router.post("/",(req,res)=> {
  return res.json (req.body)
})


module.exports = router;
