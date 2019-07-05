var router = require('express').Router();
var mongoose = require("mongoose");
var bcrypt = require('bcryptjs');
var { success } = require('services/returnToUser');

const User = mongoose.model('user');
const Rule = mongoose.model('rule');

router.get('/', async (req, res, next) => {
    let insert = {
        username: "admin",
        password: "1",
        fullname: "Toi La Admin",
        roles: ["ADMIN"]
    }
    const saltRounds = 10;
    bcrypt.hash(insert.password, saltRounds, async (err, hash) => {
        insert.password = hash;
        await mongoose.model('user').create(insert)
    });

    let rule = new Rule({
        minOfImport: 300,
        minOfinventory: 150,
        minQuantity: 20
    })
    await rule.save();
    return success(res, "Done")
});

module.exports = router;