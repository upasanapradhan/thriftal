
var express = require('express');
var router = express.Router();
var Productdetails = require('../models/productdetails')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/productdetails', function(req, res, next) { 
  Productdetails.find().exec(function(err,productdetails){
    console.log(',,,,,data',productdetails)
    res.render('viewalldetails',{productdetails})
  })
  
});


 router.get('/adddetails', function(req, res, next) {
   //Movies.find().exec(function(err,movies){
     res.render('adddetails')
   //})
  
});

router.post('/adddetails', function(req, res, next) {
  console.log(req.body)
  var productdetail = new Productdetails({
  name: req.body.name,
  price: req.body.price,
  email: req.body.email,
  phone:req.body.phone,
  condition: req.body.condition,
  description: req.body.description,
  
})
var promise = productdetail.save()
promise.then((productdetail) => {
  console.log('product saved',productdetail)
  //return res.redirect('movies')
})
res.redirect('/editdelete');

});

 router.get('/editdelete', function(req, res, next) {
   //Movies.find().exec(function(err,movies){
     res.render('editdelete')
   //})
 
});



router.get('/editdelete/:_id', function(req, res, next) {
  Productdetails.findOne({_id:req.params.id}, function(err,productdetail){
    console.log('movie selected....',productdetail)
    res.render('editdelete',{productdetail})
})


})




router.get('/productdetail/:id', function(req, res, next) {
  Productdetails.findOne({_id:req.params.id}, function(err,productdetail){
    console.log('movie selected....',productdetail)
    res.render('viewselldetails',{productdetail})
})


})


  router.get('/delete/:_id',function(req, res, next) {
    Productdetails.deleteOne({_id:req.params._id}, function(err,productdetail){
      console.log('movie deleted.....',productdetail)
      res.redirect('/productdetails')
    
  })
})


router.get('/update/:_id',function(req, res, next) {
  Productdetails.findOne({_id:req.params._id}, function(err,productdetail){
    console.log('product deleted.....',productdetail)
    res.render('updatedetails',{productdetails})
  
})
})

router.post('/update', function(req, res, next) {
  Productdetails.findOneAndUpdate({_id: req.body._id}, {$set: req.body}, function(err,productdetail){
    res.redirect('/productdetails');
  
})
});




module.exports = router;








