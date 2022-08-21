import request from 'axios'

export const login = (user: {}) => request({
    url: 'api/user/login',
    method: 'post',
    data: user
})