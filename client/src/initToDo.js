import { tokenStatus } from './token.js';
/**
 * @description check if token is stored after successful login
 * @author Hans
 */

let token = window.localStorage.getItem("token");

if (tokenStatus) {
    
    axios.interceptors.request.use(config => {
        config.headers.Authorization = token;
        return config;
    },error => {
        console.log("request拦截器网络错误")
        return Promise.reject(error);
    })
}
else {
    console.log("您未登陆！");
    setTimeout(() => {
        window.open("../templete/Todo.html",_self);
    },1000);
}