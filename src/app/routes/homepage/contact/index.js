var mongoose = require('mongoose');

module.exports = router => {
    router.get('/contact', (req, res, next) => {
        return res.render('homepage/contact');
    })
}