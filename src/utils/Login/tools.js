// 验证用户名
export const checkusername = (rule, value, callback) => {
  if (value !== 'admin') {
    return callback(new Error('用户名只能是admin'))
  } else {
    return callback()
  }
}

// 验证密码

export const checkpassword = (rule, value, callback) => {
  if (value !== '123456') {
    return callback(new Error('密码只能是123456'))
  } else {
    return callback()
  }
}

// 同意协议

export const checkagreement = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('请先点击同意'))
  } else {
    return callback()
  }
}
