
const mongoose = require('mongoose');

var { success, errorNotify, successNotify} = require('services/returnToUser');
const Rule = mongoose.model('rule');


async function getRule(req, res, next) {
	try {
		let rule = await Rule.findOne({})
		if(!rule) {
			rule = new Rule();
			await rule.save()
		}
		return res.render('adminpage/rule', { rule })
	} catch (error) {
		next(error);
	}
}


async function postRule(req, res, next) {
	try {
		
		let newRule = new Rule({...req.body});
		let rule = await Rule.findOne({});
		console.log(rule)
		await Rule.findOneAndUpdate({_id: rule._id}, {...req.body}, { omitUndefined: true })

		return successNotify(res, { message: "Thay đổi quy định thành công!" })

	} catch (error) {
		return errorNotify(res, error)
	}
}


module.exports = {
	getRule,
	postRule
}