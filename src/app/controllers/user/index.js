const randomstring = require("randomstring");
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

var { success, errorNotify, successNotify } = require('services/returnToUser');
const User = mongoose.model('user');
const saltRounds = 10;


async function getAll(req, res, next) {
	try {
		let listUsers = await User.find({_id: {$ne: req.user._id}})
		return res.render('adminpage/user', { listUsers, user: req.user  })
	} catch (error) {
		next(error);
	}
}


async function postCreate(req, res, next) {
	try {
		let user = new User({
			...req.body,
			fullname: req.body.fullname.toUpperCase(),
		});

		let existUser = await User.findOne({username: user.username});
		if(existUser) {
			return errorNotify(res, { message: "Tài khoản nhân viên này đã tồn tại" })
		}
		bcrypt.hash(user.password, saltRounds, async (err, hash) => {
			user.password = hash;
			await user.save({ validateBeforeSave: true })
		});
		return successNotify(res, { message: "Tạo tài khoản nhân viên thành công" })

	} catch (error) {
		return errorNotify(res, error)
	}
}


async function postEdit(req, res, next) {
	try {
		let update = {
			...req.body,
			userID: undefined
		}
		update.fullname = (req.body.fullname != '') ? req.body.fullname.toUpperCase() : undefined;
		update.roles = (req.body.roles != '') ? req.body.roles : undefined;

		await User.findOneAndUpdate({ _id: req.params.id }, update, { omitUndefined: true })

		return successNotify(res, { message:"Thay đổi thông tin tài khoản nhân viên thành công!" })

	} catch (error) {
		return errorNotify(res, error)
	}
}

async function getInfo(req, res, next) {
	try {
		let user = await User.findOne({ _id: req.params.id });
		return res.json(user);
	} catch (error) {
		next(error);
	}
}


async function remove(req, res, next) {
	try {
		let deleted = await User.findOneAndDelete({ _id: req.params.id });
		return successNotify(res, { message: `Xóa thành công Nhân viên có mã: ${deleted.userID}` })
	} catch (error) {
		console.error(error)
		return errorNotify(res, error)
	}
}

module.exports = {
	getAll,
	postCreate,
	postEdit,
	getInfo,
	remove
}