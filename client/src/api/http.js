import axios from "axios"

axios.default.baseURL = "www.baidu.com"

axios.interceptors.request.use(config => {
    return config
})

axios.interceptors.response.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})

export default axios