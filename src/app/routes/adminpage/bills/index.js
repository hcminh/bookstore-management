var mongoose = require('mongoose');
var router = require('express').Router();


router.get('/', async (req, res, next) => {
    try {
        let bills = await mongoose.model('bills').find();
        return res.render('adminpage/bills', {bills});
    } catch (error) {
        next(error);
    }
});


module.exports = router