const mongoose = require('mongoose');

const Bill = mongoose.model('bill');
const Book = mongoose.model('book');
const Customer = mongoose.model('customer');
const ManageBook = mongoose.model('manageBook');
const Rule = mongoose.model('rule')

const { successNotify, errorNotify, success } = require('services/returnToUser')
const { isExist } = require('services/modifyData')

async function getAll(req, res, next) {
	try {
		listBills = await Bill.find({}).populate('createBy');
		return res.render('adminpage/bill', { listBills });
	} catch (error) {
		next(error);
	}
}


async function getInfo(req, res, next) {
	try {
		let bill = await Bill.findOne({ _id: req.params.id })
			.populate('createBy')
			.populate('customer')
			.populate('listBook.book');
		return res.json(bill);
	} catch (error) {
		next(error);
	}
}

/** 
 * Create new Form
 */
async function getCreatePage(req, res, next) {
	try {
		return res.render('adminpage/bill/create', { user: req.user });
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
			return errorNotify(res, { message: "Mã sách không tồn tại! <br> Vui lòng nhập kiểm tra lại thông tin" })
		}
		let manageBook = await ManageBook.findOne({ bookID: info.bookID })
		let rule = await Rule.findOne({})

		if (manageBook.amount - info.amount < rule.minQuantity) {
			return errorNotify(res, { message: `Không thể bán! <br> Số lượng sách còn trong kho ít hơn mức quy định` })
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
		let newBill = new Bill();
		newBill.total = 0;
		newBill.createBy = req.user._id;
		for (let item in infos.infos) {
			newBill.listBook.push(infos.infos[item]);
			newBill.total += infos.infos[item].total;
		}
		if (infos.customerID != '') {
			let customer = await Customer.findOne({ customerID: infos.customerID })
			customer.totalMoney += newBill.total;
			newBill.customer = customer._id;
			customer.save();
		}
		await newBill.save();
		return successNotify(res, { message: `Lưu hóa đơn thành công!` })

	} catch (error) {
		return errorNotify(res, error)
	}
}

/*
	DELETE form
*/

async function remove(req, res, next) {
	try {
		let deleted = await Bill.findOneAndDelete({ _id: req.params.id });
		return successNotify(res, { message: `Xóa thành công Hóa đơn có mã: ${deleted.billID}` })

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
	remove
}

