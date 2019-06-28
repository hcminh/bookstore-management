var mongoose = require('mongoose');

module.exports = router => {
    router.get('/cart', (req, res, next) => {
        return res.render('homepage/cart');
    })
}