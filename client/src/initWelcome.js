import { passwordIsRight,compare } from './password.js';
import { popUp } from './popUp.js';



//这里将要检查本地有无token，是否和服务器的token相同



/**
 * @description send verification code to email -发送验证码到邮箱
 * @author Hans
 */
$("#link-sendCode").on("click",() => {
    axios.post('http://60.205.230.224:8000/api/user/email',{
        email:$("#input-email-signUp").val()
    })
    .then(res => {
        //popUp("成功","验证码发送成功");
        console.log(res.data);
    })
    .catch(err => {
        //popUp("失败","网络链接出错");
        console.error(err); 
    })
});

/**
 * @description sign up request -发送注册请求
 * @author Hans
 */
$("#button-signUp").on("click", () => {
    if ( $("#input-password-first").val() == $("#input-password-again").val() ) {
        axios({
            method: "post",
            url: '/user/register',
            baseURL:'http://60.205.230.224:8000/api',
            data: {
                email: $("#input-email-signUp").val(),
                password: $("#input-password-again").val(),
                username: $("#input-username-signUp").val(),
                captcha: $("#input-captcha").val()
            }
        })
        .then(res => {
            if (res.code) {
                //为1时表示“验证码错误”
                console.log(res.data.msg);
            } else {
                console.log(res.data.msg);
                saveToken(res.data.data.token);
                window.open("../templete/Todo.html","_self");
            }
        })
        .catch(err => {
            console.error(err); 
        })
    } else {
        popUp("错误","两次密码不一致");
    }
});
/**
 * @description switch login & sign up page -登陆注册界面切换
 * @author Hans
 */


$("#link-signUp").on("click", () => {

    $(".container").css({
        "display": "none"
    });
    $(".container__add").css({
        "display" : "grid"
    });
});

$("#link-login").on("click", () => {
    $(".container").css({
        "display": "grid"
    });
    $(".container__add").css({
        "display" : "none"
    });
});


let saveToken = (token) => {
    window.localStorage.setItem("token",token);
}