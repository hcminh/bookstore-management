var router = require('express').Router();
var passport = require("passport");


//dang nhap
router.get('/', async function (req, res, next) {
    req.logOut();
    return res.redirect('/login')
});


module.exports = router