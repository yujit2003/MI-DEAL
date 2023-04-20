   const Product = require("../models/productModel")
   const ErrorHander = require("../utils/errorhandler");
   const catchAsyncError = require("../middleware/catchAsyncErrors");
    const ApiFeatures = require("../utils/apifeatures");

//    jo export krna hai use exports ke baad likh na hai
//   creating a product ---> ADMIN  
    exports.createProduct = catchAsyncError(async(req, res) => {
        console.log("inside the create product")

        req.body.user = req.user.id;

        const product = await Product.create(req.body);
           console.log("inside create prodduct")
        res.status(201).json({
            Status: true,
            product
        })
       })

    
// get all product list
   exports.getAllProducts = catchAsyncError(async (req,res, next) =>{
        const resultPerPage = 8;
        const productsCount = await Product.countDocuments(); 
        console.log(productsCount)
       const apiFeatures = new ApiFeatures(Product.find(), req.query)
       .search()
       .filter()
       .pagination(resultPerPage);
    //    hr function mai query return krrahe hain 
       const products = await apiFeatures.query;

        res.status(200).json({
            Status: true,
            products,
            productsCount,
            resultPerPage
        });
    })


    // update product ----> ADMIN
    exports.UpdateProduct = catchAsyncError(async (req,res,next) => {
        let product = await Product.findById(req.params.id);
        if(!product) {
            if(!product) {
                return next(new ErrorHander("Product not found, 404"));  
            }
        }

        product = await Product.findByIdAndUpdate(req.params.id,req.body, {new: true,
            runValidators: true,
            useFindAndModify: true
            })
        
            res.status(200).json({
                success: true,
                product
            })
    })


    // Delete Product

    exports.deleteProduct = catchAsyncError(async (req, res,next) => {
        let product = await Product.findById(req.params.id);
        if(!product) {
            return next(new ErrorHander("Product not found, 404"));  
        }
        

        await product.remove();

        res.send(200).json({
            success: true,
            message: "product have been deleted"
        })

    })

    // Get Product Details
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHander("Product not found", 404));
    }

    res.status(200).json({
      success: true,
      product,
    });
  });