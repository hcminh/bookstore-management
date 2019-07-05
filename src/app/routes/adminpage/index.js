var router = require('express').Router();

router.get('/', (req, res, next) => {
    return res.render('adminpage');
})

router.use('/bill', require('./bill'));
router.use('/user', require('./user'));
router.use('/customer', require('./customer'));
router.use('/book', require('./book'));
router.use('/importForm', require('./importForm'));
module.exports = router;