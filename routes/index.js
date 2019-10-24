
// var express = require('express');
// var router = express.Router();
// var productdetails = require('../models/productdetails')



// /* GET home page. */




// router.get('/', function(req, res, next) {
//   productdetails.find().exec(function(err,productdetails){
//     console.log(',,,data',productdetails)
//     res.render('index',{productdetails})
//   })
// });




// router.get('/productdetails', function(req, res, next) { 
//   productdetails.find().exec(function(err,productdetails){
//     console.log(',,,,,data',productdetails)
//     res.render('viewdetails',{productdetails})
//   })
  
// });

//  router.get('/adddetails', function(req, res, next) {
//      res.render('adddetails')
// });


// router.post('/adddetails', function(req, res, next) {
//   console.log(req.body)
//   var productdetail = new Productdetails({
//   name: req.body.name,
//   price: req.body.price,
//   condition: req.body.condition,
//   description: req.body.description,
  
// })
// var promise = productdetail.save()
// promise.then((productdetails) => {
//   console.log('product saved',productdetails)
// })
// res.redirect('viewdetails');
// });

// router.get('/productdetail/:id', function(req, res, next) {
//   Movies.findOne({_id:req.params.id}, function(err,productdetail){
//     console.log('movie selected....',productdetail)
//     //res.render('viewOne',{movie})
// })


// })




 

// module.exports = router;
var express = require('express');
var router = express.Router();
var productdetails= require('../models/productdetails');



/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});


 router.get('/', function(req, res, next) {
  productdetails.find().exec(function(err,productdetails){
    console.log('....data',productdetails)
   res.render('index',{productdetails})
  })
});   

router.get('/adddetails',function(req,res,next){
  res.render('adddetails')
})

router.get('/viewdetails/:_id',function(req,res,next)
{
  productdetails.findOne({_id: req.params._id},function(err,productdetails){
     console.log('movie selected.....',productdetails)
    res.render('viewdetails',{productdetails})

 })

})





// router.get('/buyproducts', function(req, res, next) { //this part of code is for buyproducts database
//   buyproducts.find().exec((err,buyproducts)=>{
//     console.log('movies......',buyproducts)
//      return buyproducts;
//   })
// })


// router.get('/productdetails', function(req, res, next) {
//   res.render('productdetails')
// });
// router.post('/productdetails', function (req, res, next) {
//   console.log(req.body);
//   //creating a variable for 
//   var productdetail= new productdetails({
//     name: req.body.name,
//     price: req.body.price,
//     description: req.body.description,
//     condition: req.body.condition,
// image:req.body.image,
//   })
//   var promise=productdetail.save()
//   promise.then((productdetails)=>{
//     console.log('products saved',productdetails)
//   })
//   res.redirect('/');
// })

 
module.exports = router ;








