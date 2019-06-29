const randomstring = require("randomstring");
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

var { success, errorNotify, } = require('services/returnToUser');
const Customer = mongoose.model('customer');


async function getAllCustomer(req, res, next) {
	try {
		let listCustomer = await Customer.find({})
		return res.render('adminpage/customer', { listCustomer })
	} catch (error) {
		next(error);
	}
}

async function getCreateCustomer(req, res, next) {
	try {
		return res.render('adminpage/customer/create')
	} catch (error) {
		next(error);
	}
}

async function postCreateCustomer(req, res, next) {
	try {
		let customer = new Customer({
			...req.body,
			fullname: req.body.fullname.toUpperCase(),
			address: req.body.address.toUpperCase(),
		});

		await customer.save({ validateBeforeSave: true })

		return res.render('adminpage/customer/create', { success: "Tạo tài khoản khách hàng thành công" })

	} catch (error) {
		return errorNotify(res, error)
	}
}

async function getEditCustomer(req, res, next) {
	try {
		return res.render('adminpage/customer/edit')
	} catch (error) {
		next(error);
	}
}

async function postEditCustomer(req, res, next) {
	try {
		let update = {
			...req.body,
			customerID: undefined
		}
		update.fullname = (req.body.fullname != '') ? req.body.fullname.toUpperCase() : undefined;
		update.address = (req.body.address != '') ? req.body.address.toUpperCase() : undefined;

		await Customer.findOneAndUpdate({ _id: req.params.id }, update, { omitUndefined: true })

		return res.render('adminpage/customer/edit', { success: "Thay đổi thông tin tài khoản khách hàng thành công!" })


	} catch (error) {
		return errorNotify(res, error)
	}
}

async function getCustomerInfo(req, res, next) {
	try {
		let customer = await Customer.findOne({ _id: req.params.id });
		return res.json(customer);
	} catch (error) {
		next(error);
	}
}


async function deleteCustomer(req, res, next) {
	try {
		await Customer.deleteOne({ _id: req.params.id });
		return res.status(200).send('xóa');
	} catch (error) {
		console.error(error)
		return errorNotify(res, error)
	}
}

module.exports = {
	getAllCustomer,
	getCreateCustomer,
	postCreateCustomer,
	getEditCustomer,
	postEditCustomer,
	getCustomerInfo,
	deleteCustomer
}