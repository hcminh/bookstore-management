
var { checkPermission } = require('services/checkPermission');
var { IS_ALL } = require('config/constants')


module.exports = router => {
  router.use('/setup', require('./setup'));
  router.use('/login', require('./adminpage/login'));
  router.use('/admin', require('./adminpage'));
  router.use('/', require('./homepage'));
}