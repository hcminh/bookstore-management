var { snackizeKeys } = require('./convert');

module.exports = {
  notAllow: res => {
    res.status(403).send({
      success: false,
      message: "You are not allowed.",
      data: null
    });
  },
  empty: (res, mess, option = {}) => {
    return res.status(204).send({
      success: true,
      message: mess,
      data: null,
      option
    })
  },
  errorProcess: (res, err) => {
    return res.status(500).send({
      success: false,
      message: `Error during proccess ${err.message}`,
      data: null,
    })
  },
  errorNotify: (res, err) => {
    return res.status(500).json({
      message: `${err.message}`
    })
  },
  successNotify: (res, sucs) => {
    return res.status(200).json({
      message: `${sucs.message}`
    })
  },
  success: (res, mess, data, option = {}) => {
    return res.json({
      success: true,
      message: mess,
      data: snackizeKeys(data),
      option
    })
  },
  errorWithMess: (res, mess) => {
    return res.status(406).send({
      success: false,
      message: mess,
      data: null
    })
  },
  redirectLogin: (res) => {
    return res.redirect('/login')
  }
}