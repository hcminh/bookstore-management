var { checkPermission } = require('services/checkPermission');
var { IS_ALL } = require('config/constants')


module.exports = app => {
  app.use('/setup', require('./setup'));
  app.use('/login', require('./adminpage/login'));
  app.use('/admin', require('./adminpage'));
  // app.use('/admin', checkPermission(IS_ALL), require('./adminpage'));
  // app.use('/test', require('./test'));
  app.use('/', require('./homepage'));
}