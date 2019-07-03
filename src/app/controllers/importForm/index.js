const mongoose = require('mongoose');

const Form = mongoose.model('importForm')
const Info = mongoose.model('importInfo')
const Book = mongoose.model('book')
const ManageBook = mongoose.model('manageBook')

const MIN_OF_BOOKS = 300

const { successNotify, errorNotify, success } = require('services/returnToUser')
const { isExist } = require('services/modifyData')

async function getAllForm(req, res, next) {
	try {
		listForms = await Form.find({}).populate('createBy');
		console.log(listForms)
		return res.render('adminpage/importForm', { listForms });
	} catch (error) {
		next(error);
	}
}


async function getFormInfo(req, res, next) {
	try {
		let form = await Form.findOne({ _id: req.params.id }).populate('createBy')
			.populate('verifiedBy')
			.populate('importInfo.book');
		console.log(form)
		return res.json(form);
	} catch (error) {
		next(error);
	}
}

/** 
 * Create new Form
 */
async function getCreateForm(req, res, next) {
	try {
		return res.render('adminpage/importForm/create', { user: req.user });
	} catch (error) {
		next(error);
	}
}

async function postCheckCreateInfo(req, res, next) {
	try {
		let info = {
			...req.body
		}
		let book = await Book.findOne({ bookID: info.bookID });
		if (!book) {
			return errorNotify(res, { message: "Mã sách không tồn tại! vui lòng nhập thông tin sách trước khi nhập kho" })
		}
		let manageBook = await ManageBook.findOne({ bookID: info.bookID })

		if (manageBook.amount >= MIN_OF_BOOKS) {
			return errorNotify(res, { message: `Chỉ cho nhập tựa sách có lượng tồn bé hơn ${MIN_OF_BOOKS}` })
		}
		//is ok
		info.book = book._id;
		info.price = book.price;
		return success(res, "done", info);
	} catch (error) {
		next(error);
	}
}



async function postCreateForm(req, res, next) {
	try {
		let infos = { ...req.body }
		let newForm = new Form();
		newForm.createBy = req.user._id;
		for (let item in infos) {
			newForm.importInfo.push(infos[item])
		}
		await newForm.save();
		return successNotify(res, { message: `Tạo phiếu nhập sách thành công <br> Đang chờ admin xác nhận phiếu cập nhật kho....` })

	} catch (error) {
		return errorNotify(res, error)
	}
}

/** 
 * Edit Form
 */
async function getEditForm(req, res, next) {
	try {
		return res.render('adminpage/importForm/edit');
	} catch (error) {
		next(error);
	}
}

async function postVerifyForm(req, res, next) {
	try {
		let verifyForm = await Form.findOne({ _id: req.params.id, verified: false}).populate('importInfo.book');
		if(!verifyForm)
			return errorNotify(res, {message: "Phiếu nhập sách đã được xác nhận trước đó"})
		verifyForm.verified = true;
		verifyForm.verifiedBy = req.user._id;
		for(let i = 0; i < verifyForm.importInfo.length; i++) {
			let manageBook = await ManageBook.findOne({bookID: verifyForm.importInfo[i].book.bookID})
			manageBook.amount += verifyForm.importInfo[i].amount;
			await manageBook.save();
		}
		await verifyForm.save();
		return successNotify(res, { message: `Cập nhật thông tin kho sách thành công` })

	} catch (error) {
		return errorNotify(res, error)
	}
}

/*
	DELETE form
*/

async function deleteForm(req, res, next) {
	try {
		let deletedForm = await Form.findOneAndDelete({ _id: req.params.id });
		return successNotify(res, { message: `Xóa thành công Phiếu nhập sách có mã: ${deletedForm.formID}` })

	} catch (error) {
		return errorNotify(res, error)
	}
}

module.exports = {
	getAllForm,
	getFormInfo,
	getCreateForm,
	postCreateForm,
	getEditForm,
	postVerifyForm,
	deleteForm,
	postCheckCreateInfo
}

