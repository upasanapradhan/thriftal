var mongoose= require('mongoose');
const productdetailsSchema = mongoose.Schema({
    name: String,
    email:String,
    price: Number,
    phone:Number,
    description: String,
    image: String,
    condition:String,
    CreatedData: {
        type:Date,
        default:Date.now
    }
});
module.exports= mongoose.model('productdetails', productdetailsSchema);