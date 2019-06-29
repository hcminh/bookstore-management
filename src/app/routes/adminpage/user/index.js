var mongoose = require('mongoose');
var router = require('express').Router();


router.get('/', (req, res, next) => {
    return res.render('adminpage/users');
})
require('./modules/create')(router);
require('./modules/edit')(router);
require('./modules/delete')(router);

module.exports = router