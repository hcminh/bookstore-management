var mongoose = require('mongoose');

module.exports = router => {
    router.get('/:id/edit', async (req, res, next) => {
        try {
            let user = await mongoose.model('users').findOne({_id: req.params.id});
            return res.render('adminpage/users/edit', {user});
        } catch (error) {
            next(error);
        }
    })
    router.post('/:id/edit', async (req, res, next) => {
        try {
            let user = await mongoose.model('users').findOne({_id: req.params.id});
            let update = {
                ...user,
                ...req.body
            }
            await mongoose.model('users').findOneAndUpdate({_id: user._id}, update, {new: true});
            return res.redirect('/admin/users');
        } catch (error) {
            next(error);
        }
    })
}