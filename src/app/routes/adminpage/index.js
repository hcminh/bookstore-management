var router = require('express').Router();

router.get('/', (req, res, next) => {
    return res.render('adminpage');
})

router.use('/bills', require('./bills'));
router.use('/users', require('./users'));
router.use('/customer', require('./customer'));
router.use('/book', require('./book'));
router.use('/customerType', require('./customerType'));
module.exports = router;