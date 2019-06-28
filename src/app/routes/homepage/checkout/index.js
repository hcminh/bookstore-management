var mongoose = require('mongoose');

module.exports = router => {
    router.get('/checkout', (req, res, next) => {
        return res.render('homepage/checkout');
    })
}