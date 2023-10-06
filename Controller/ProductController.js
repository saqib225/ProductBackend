const ProductSchema = require('../modules/Product')
const Insert =async (req,res) => {
    const {name,description,price,qty}=req.body;
    // console.log(name);
    let  totalAmount = price*qty;
    try{
        const Product =await new ProductSchema({name,description,price,quantity:qty,total:totalAmount})
        const savedProduct=Product.save();
        console.log("Product Inserted sucessfully");
        res.json({savedProduct:Product});
    }
    catch(err){
        console.error('Error While inserting product', err);
        res.json(err);
    }
}


module.exports= Insert