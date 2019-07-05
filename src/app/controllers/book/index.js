const mongoose = require('mongoose');

const Book = mongoose.model('book')
const ManageBook = mongoose.model('manageBook')
const { successNotify, errorNotify } = require('services/returnToUser')

async function getAllBook(req, res, next) {
	try {
		listBooks = await Book.find({});
		return res.render('adminpage/book', {listBooks});
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
		let existBook = await Book.findOne({$or: [{name: book.name}, {bookID: book.bookID}]})
		if(existBook) {
			return errorNotify(res, {message: `Tựa sách ${book.name} hoặc mã sách ${book.bookID} đã tồn tại trong hệ thống!`})
		}

		let manageBook = new ManageBook({bookID: book.bookID});
		await manageBook.save();
		await book.save({ validateBeforeSave: true });
		return successNotify(res, {message: `Thêm thành công tựa sách ${book.name}`})

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
			bookID: undefined,
			name: undefined
		}
		let {name} = await Book.findOneAndUpdate({ _id: req.params.id }, update, { omitUndefined: true })
		return successNotify(res, {message: `Sửa thành công tựa sách ${name}`})

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
		await ManageBook.findOneAndDelete({ bookID: deletedBook.bookID });
		return successNotify(res, {message: `Xóa thành công tựa sách có mã: ${deletedBook.bookID}`})

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

