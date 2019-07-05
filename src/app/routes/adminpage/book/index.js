
const router = require('express').Router();
const controller = require('app/controllers').bookController;

const { WAREHOUSE_MANAGER } = require("config/constants");
const { checkPermission } = require("services/checkPermission");

router.route('/')
.get(controller.getAllBook)

router.route('/create')
.post(controller.postCreateBook)

router.route('/info/:id')
.get(controller.getBookInfo)
.post(checkPermission(WAREHOUSE_MANAGER), controller.postEditBook)
.delete(checkPermission(WAREHOUSE_MANAGER), controller.deleteBook);



module.exports = router