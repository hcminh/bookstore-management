const mongoose = require('mongoose');

const Book = mongoose.model('book')


async function getAllBook(req, res, next) {
	try {
		return res.render('adminpage/products');
	} catch (error) {
		next(error);
	}
}


async function getBookInfo(req, res, next) {
	try {
		let book = await Book.findOne({ _id: req.params.id });
		return res.json(book);
	} catch (error) {
		next(error);
	}
}

/** 
 * Create new Book
 */
async function getCreateBook(req, res, next) {
	try {
		return res.render('adminpage/book/create');
	} catch (error) {
		next(error);
	}
}

async function postCreateBook(req, res, next) {
	try {
		let book = new Book({ ...req.body });
		book.save({ validateBeforeSave: true });

		return res.status(200).json(book);

	} catch (error) {
		return errorNotify(res, error)
	}
}

/** 
 * Edit Book
 */
async function getEditBook(req, res, next) {
	try {
		return res.render('adminpage/book/edit');
	} catch (error) {
		next(error);
	}
}

async function postEditBook(req, res, next) {
	try {
		let update = {
			...req.body,
			bookID: undefined
		}
		await Book.findOneAndUpdate({ _id: req.params.id }, update, { omitUndefined: true })
		return success(res, null)

	} catch (error) {
		return errorNotify(res, error)
	}
}

/*
	DELETE book
*/

async function deleteBook(req, res, next) {
	try {
		let deletedBook = await Book.findOneAndDelete({ _id: req.params.id });
		return res.status(200).json(deletedBook);
	} catch (error) {
		return errorNotify(res, error)
	}
}

module.exports = {
	getAllBook,
	getBookInfo,
	getCreateBook,
	postCreateBook,
	getEditBook,
	postEditBook,
	deleteBook
}










module.exports = {
	handleGetProduct,
	handleGetAllProducts,
	handlePostCreateProduct,
	handlePostEditProduct,
	handleDeleteProduct,
}