var router = require('express').Router();
var mongoose = require("mongoose");
var bcrypt = require('bcryptjs');
var { success, errorProcess } = require('services/returnToUser');
var { send } = require('services/sendMail');

router.get('/', async (req, res, next) => {
    let insert = {
        username: "admin",
        password: "123",
        fullname: "Admin",
        roles: "ADMIN",
        email: "admin@gmail.com",
        employeeId: "test",
        birth: Date.now(),
        address: "test",
        phone: "test",
        idCode: "test",
    }
    const saltRounds = 10;
    bcrypt.hash(insert.password, saltRounds, async (err, hash) => {
        insert.password = hash;
        let usersInfo = await mongoose.model('users').create(insert)
        console.log(usersInfo)
    });
    let insert2 = {
        username: "employee",
        password: "123",
        fullname: "employee",
        roles: "EMPLOYEE",
        email: "employee@gmail.com",
        employeeId: "employee",
        birth: Date.now(),
        address: "employee",
        phone: "employee",
        idCode: "employee",
    }
    bcrypt.hash(insert2.password, saltRounds, async (err, hash) => {
        insert2.password = hash;
        let usersInfo2= await mongoose.model('users').create(insert2)
        console.log(usersInfo2)
    });
    return success(res, "Done")
});

router.get('/sendmail', async (req, res, next) => {
    try {
        
			let contentMail = `<h1>Your password to login our system is: </h1>`
			await send("hoangminhh17@gmail.com", "New Account", contentMail);
    } catch (error) {
        next(error)
    }
})
module.exports = router;