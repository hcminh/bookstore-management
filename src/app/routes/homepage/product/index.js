var mongoose = require('mongoose');

module.exports = router => {
    router.get('/product', (req, res, next) => {
        return res.render('homepage/product');
    })
}