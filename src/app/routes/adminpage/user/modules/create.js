var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


module.exports = router => {
    router.get('/create', (req, res) => {
        return res.render('adminpage/users/register');
    })

    router.post('/create', async (req, res, next) => {
        try {
            let insert = {
                ...req.body
            }
            const saltRounds = 10;
            bcrypt.hash(insert.password, saltRounds, async (err, hash) => {
                insert.password = hash;
                let usersInfo = await mongoose.model('users').create(insert)
            });
            return res.render('adminpage/users');
        } catch (error) {
            next(error);
        }
    })
}