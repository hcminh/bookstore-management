var mongoose = require('mongoose');

module.exports = router => {
    router.get('/category', (req, res, next) => {
        return res.render('homepage/category');
    })
}