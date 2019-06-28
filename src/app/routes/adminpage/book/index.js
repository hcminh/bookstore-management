
const router = require('express').Router();
const controller = require('controllers').bookController;

const { IS_ADMIN, IS_EMPLOYEE } = require("config/constants");
const { checkPermission } = require("services/checkPermission");

router.route('/')
.get(controller.getAllBook)

router.route('/create')
.get(controller.getCreateBook)
.post(controller.postCreateBook)

router.route('/info/:id')
.get(controller.getBookInfo)
.post(controller.postEditBook)
.delete(controller.deleteBook);



module.exports = router