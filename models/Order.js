const {Schema, model} = require('mongoose');


const orderSchema = new Schema({
    orderDescription:{type:String, required:true},
    productName:{type:String, required:true},
    price:{type:Number, required:true},
    vat:{type:Number, required:true},
    totalInclVat:{type:Number, required:true},
    customer:{type:Schema.Types.ObjectId, ref:'Customer'}
})


const Order = model('Order', orderSchema);

module.exports = Order;