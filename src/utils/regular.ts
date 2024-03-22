// 手机号正则
const validateMobile = function (value: any) {
  const newValue = value.replace(/[^0-9]/gi, '')
  if (value !== newValue) {
    return false
  }
  else if (newValue.length !== 11) {
    return false
  }
  else {
    return true
  }
}

export {
  validateMobile,
}
