const ProductsAndCats = require('../Model/productAndCat');

module.exports = (router) => {
    router.post('/insertProducts', (req, res) => {

        if (!req.body.product) {
            res.json({
                success: false,
                message: 'no product'
            })
        } else if (!req.body.price) {
            res.json({
                success: false,
                message: 'no price'
            })
        } else if (!req.body.quantity) {
            res.json({
                success: false,
                message: 'no quantity'
            })
        } else if (!req.body.shipping) {
            res.json({
                success: false,
                message: 'no shipping'
            })
        } else if (!req.body.info) {
            res.json({
                success: false,
                message: 'no info'
            })
        } else if (!req.body.image) {
            res.json({
                success: false,
                message: 'no image'
            })
        } else {
            const productsandcat = new ProductsAndCats({
                category: req.body.category,
                product: req.body.product,
                price: req.body.price,
                formerprice: req.body.formerprice,
                quantity: req.body.quantity,
                selectcategory: req.body.selectcategory,
                shipping: req.body.shipping,
                info: req.body.info,
                image: req.body.image
            });

            productsandcat.save((err) => {
                if (err) {
                    if (err.errors) {
                        if (err.errors.category) {
                            res.json({
                                success: false,
                                message: "No category"
                            });
                        } else if (err.errors.product) {
                            res.json({
                                success: false,
                                message: "No product"
                            });
                        } else if (err.errors.price) {
                            res.json({
                                success: false,
                                message: "No price"
                            });
                        } else if (err.errors.formerprice) {
                            res.json({
                                success: false,
                                message: "No formerprice"
                            });
                        } else if (err.errors.quantity) {
                            res.json({
                                success: false,
                                message: "No quantity"
                            });
                        } else if (err.errors.selectcategory) {
                            res.json({
                                success: false,
                                message: "No selectcategory"
                            });
                        } else if (err.errors.shipping) {
                            res.json({
                                success: false,
                                message: "No shipping"
                            });
                        } else if (err.errors.image) {
                            res.json({
                                success: false,
                                message: "No image"
                            });
                        }
                    }
                    res.json({
                        success: false,
                        message: err
                    });
                } else {
                    res.json({
                        success: true,
                        message: "products and cats saved"
                    })
                }
            })
        }
    })
    router.get('/getProducts', (req, res) => {
        ProductsAndCats.find({}, (err, productsandcat) => {
            if (err) {
                res.json({
                    success: false,
                    message: err
                })
            } else if (!productsandcat) {
                res.json({
                    success: false,
                    message: "no productsandcat "
                })
            } else {
                res.json({
                    success: true,
                    productsandcat: productsandcat
                });
            }
        })
    })
    router.get('/getEachProducts:id', (req, res) => {
        if (!req.params.id) {
            res.json({
                success: false,
                message: 'no id'
            })

        }
        ProductsAndCats.findOne({
            _id: req.params.id
        }, (err, product) => {
            if (err) {
                res.json({
                    success: false,
                    message: err
                })
            } else if (!product) {
                res.json({
                    success: false,
                    message: 'no product found'
                });
            } else {
                res.json({
                    success: true,
                    product: product
                })
            }
        })
    })
    return router
}