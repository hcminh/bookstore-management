
const router = require('express').Router();
const controller = require('app/controllers').billController;

const { ADMIN } = require("config/constants");
const { checkPermission } = require("services/checkPermission");

router.route('/')
.get(controller.getAll)

router.route('/create')
.get(controller.getCreatePage)
.post(controller.postCreate)

router.route('/create/infos')
.post(controller.postInfo)

router.route('/info/:id')
.get(controller.getInfo)
.delete(checkPermission(ADMIN), controller.remove);



module.exports = router