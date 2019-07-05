const mongoose = require('mongoose');

const Form = mongoose.model('importForm')
const Book = mongoose.model('book')
const ManageBook = mongoose.model('manageBook')
const Rule = mongoose.model('rule')


const { successNotify, errorNotify, success } = require('services/returnToUser')

async function getAll(req, res, next) {
	try {
		listForms = await Form.find({}).populate('createBy');
		return res.render('adminpage/importForm', { listForms });
	} catch (error) {
		next(error);
	}
}


async function getInfo(req, res, next) {
	try {
		let form = await Form.findOne({ _id: req.params.id }).populate('createBy')
			.populate('verifiedBy')
			.populate('importInfo.book');
		return res.json(form);
	} catch (error) {
		next(error);
	}
}

/** 
 * Create new Form
 */
async function getCreatePage(req, res, next) {
	try {
		return res.render('adminpage/importForm/create', { user: req.user });
	} catch (error) {
		next(error);
	}
}

async function postInfo(req, res, next) {
	try {
		let info = {
			...req.body
		}
		let book = await Book.findOne({ bookID: info.bookID });
		if (!book) {
			return errorNotify(res, { message: "Mã sách không tồn tại! vui lòng nhập thông tin sách trước khi nhập kho" })
		}
		let manageBook = await ManageBook.findOne({ bookID: info.bookID })
		let rule = await Rule.findOne({});

		if (manageBook.amount >= rule.minOfinventory) {
			return errorNotify(res, { message: `Chỉ cho nhập tựa sách có lượng tồn bé hơn ${rule.minOfinventory}` })
		}
		
		if (req.body.amount < rule.minOfImport) {
			return errorNotify(res, { message: `Số lượng nhập phải lớn hơn ${rule.minOfImport}` })
		}
		//is ok
		info.book = book._id;
		info.price = book.price;
		return success(res, "done", info);
	} catch (error) {
		next(error);
	}
}



async function postCreate(req, res, next) {
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
async function getEditPage(req, res, next) {
	try {
		return res.render('adminpage/importForm/edit');
	} catch (error) {
		next(error);
	}
}

async function postVerify(req, res, next) {
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

async function remove(req, res, next) {
	try {
		let deletedForm = await Form.findOneAndDelete({ _id: req.params.id });
		return successNotify(res, { message: `Xóa thành công Phiếu nhập sách có mã: ${deletedForm.formID}` })

	} catch (error) {
		return errorNotify(res, error)
	}
}

module.exports = {
	getAll,
	getInfo,
	getCreatePage,
	postInfo,
	postCreate,
	getEditPage,
	postVerify,
	remove
}

