/**
 * @module password -密码操作模块
 * @author Hans
 */







/**
 * @method check -简单的检查密码难度
 * @param {string} text -用户输入的密码
 * 
 * 正则表达式
 * 少于6位数和全是数字的不行
 */
 let check = (text) => {
    let patternBits = /^\w{6,}$/;
    let patternAllNumber = /^\d+$/;

    if (!patternBits.test(text)) {
        alert("密码不能少于六位");//暂定
    } else 
    if (patternAllNumber.test(text)) {
        alert("密码不能全是数字");//暂定
    } else {
        alert("good job!");
    }
}


/**
 * @method compare -验证密码
 * @param {string} text -用户输入的密码
 * @param {string} user -当前用户数据
 */
let compare = (text,user) => {
    let testText = user.password;
    //此为测试

    if (testText == text) {
        alert("密码正确")
    };
}



export { check,compare };




