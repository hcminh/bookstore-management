const mongoose = require('mongoose');

const ManageBook = mongoose.model('manageBook')

async function getPage(req, res, next) {
	try {
		listBooks = await ManageBook.find({}).populate('book');
		return res.render('adminpage/warehouse', {listBooks, user: req.user});
	} catch (error) {
		next(error);
	}
}


module.exports = {
	getPage
}

