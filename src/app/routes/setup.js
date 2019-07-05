var router = require('express').Router();
var mongoose = require("mongoose");
var bcrypt = require('bcryptjs');
var { success, errorProcess } = require('services/returnToUser');
var { send } = require('services/sendMail');

router.get('/', async (req, res, next) => {
    let insert = {
        username: "admin",
        password: "1",
        fullname: "Hoàng Công Minh",
        roles: ["*"]
    }
    const saltRounds = 10;
    bcrypt.hash(insert.password, saltRounds, async (err, hash) => {
        insert.password = hash;
        let usersInfo = await mongoose.model('user').create(insert)
        console.log(usersInfo)
    });
    return success(res, "Done")
});


router.get('/phieu', async (req, res, next) => {
    let insert = {
        formID: "form-" + new Date().getTime(),
        createBy: "5d1bb19d17c1d116984e9f64",
    }
    await mongoose.model('importForm').create(insert)
    return success(res, "Done")
});

router.get('/phieu2', async (req, res, next) => {
    let insert = {
        _id: "1251jedfhk412j3l12",
        formID: "form-" + new Date().getTime(),
        createBy: "5d1870f6b6409605d46e535f",
    }
    await mongoose.model('importForm').create(insert)
    return success(res, "Done")
});

module.exports = router;