var router = require('express').Router();


router.get('/', (req, res, next) => {
    return res.render('homepage');
})

require('./cart')(router);
require('./categogy')(router);
require('./checkout')(router);
require('./contact')(router);
require('./product')(router);
router.use('/users', require('./customers'))
module.exports = router;