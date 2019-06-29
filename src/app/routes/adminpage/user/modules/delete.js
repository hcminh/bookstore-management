var mongoose = require('mongoose');

module.exports = router => {
    router.delete('/:id/delete', async (req, res, next) => {
        try {
            await mongoose.model('users').findOneAndDelete({_id: req.params.id});
        } catch (error) {
            next(error);
        }
    })
}