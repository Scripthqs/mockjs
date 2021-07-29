import axios from 'axios'
export function request(config) {
    const instance1 = axios.create({
        // baseURL: 'https://autumnfish.cn/',
        baseURL: '',
        timeout: 5000,
    })
    //请求拦截和响应拦截
    instance1.interceptors.request.use(config => {
        // console.log(config);
        return config;
    }, err => {
        console.log(err);
    })
    instance1.interceptors.response.use(res => {
        // console.log(res.data);
        return res.data;
    },err => {
        console.log(err);
    })
    //axios.create的返回值是一个promise对象！
    return instance1(config);
}


