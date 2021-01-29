/**
 * 这是一个demo来测试给email发送验证码
 * @author Hans
 */


 axios.post('/user/email',{
    email: "603840838@qq.com"
 }).then((response) => {
     console.log(response)
 }).catch((error) =>  {
     console.log(error);
 });