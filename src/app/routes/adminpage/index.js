var router = require('express').Router();

const { WAREHOUSE_MANAGER, EMPLOYEE_MANAGER, CUSTOMER_MANAGER, WAREHOUSE_STAFF, SALESMAN, ADMIN, IS_ALL, CUSTOMER_STAFF } = require("config/constants");
const { checkPermission, virtualUser } = require("services/checkPermission");

router.get('/', (req, res, next) => {
    return res.render('adminpage', { user: req.user });
})

router.use('/bill', checkPermission(SALESMAN), require('./bill'));
router.use('/user', checkPermission(EMPLOYEE_MANAGER), require('./user'));
router.use('/customer', checkPermission(CUSTOMER_STAFF), require('./customer'));
router.use('/book', checkPermission(WAREHOUSE_STAFF), require('./book'));
router.use('/warehouse', checkPermission(WAREHOUSE_STAFF), require('./warehouse'));
// router.use('/warehouse', virtualUser(), require('./warehouse'));
router.use('/importForm', checkPermission(WAREHOUSE_STAFF), require('./importForm'));
router.use('/rule', checkPermission(ADMIN), require('./rule'));
module.exports = router;