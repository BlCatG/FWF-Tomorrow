let tokenStatus = false;
/**
 * @description 验证token
 * @param {function} failure -token验证失败后执行的操作
 * @author Hans
 */
let checkToken = (failure) => {
    let tokenLocal = window.localStorage.getItem("token");
    //let tokenServer;
    //下面的if是异步
    if (tokenLocal && tokenLocal == tokenServer) {
        tokenStatus = true;
        window.open("../templete/Todo1.html","_self");
    } else {
        tokenStatus = false;
        failure();
    }
}

export { tokenStatus };
/**
 * @description check if tokens are the same
 * @author Hans
 */

/*
axios.interceptors.response.use(response => {
    let token = window.localStorage.getItem("token");
    if (response !== token) {
        console.log("您的登陆信息已过期！");
        setTimeout(() => {
            window.open("../templete/Welcome.html",_self);
        },1000);
    }
    return response;
},error => {
    console.log("response拦截器网络错误")
    return Promise.reject(error);
});
*/