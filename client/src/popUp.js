/** 
 * 
 * @module popUpSystem
 * @description 弹窗系统
 * @author Hans
 * 
 */








/**
 * 初始化弹窗对象
 */
let containerPopUp =  $('<div id="reminder-strong" class="reminder--strong"></div>').html(`
    <div class="container__popUp" id="container-popUp"">
        <div class="textBox__popUp__title">
            默认标题
        </div>
        <div class="textBox__popUp__text">
            默认内容
        </div>
        <div class="button__confirm button__basis">
            确认         
        </div>
        <div class="button__cancel button__basis">
            取消
        </div>

    </div>
    `);


    containerPopUp.fadeOut(0).appendTo($("body"));

    containerPopUp > $(".button__basis").on("click", function() {
        containerPopUp.fadeOut(300,() => {
        });
    });

/**
 * @description dynamically link css files -动态引入css文件
 * @author Hans
 * 
 */

let linkCss = () => {
    $("head").append($("<link>").attr({
        rel: "stylesheet",
        href: "../style/popUp.css"
    }))
}
/**
 * 
 * @method popUp -弹窗
 * @param {string} title -弹窗的标题
 * @param {string} text -弹窗的文本
 * @author Hans
 */

let popUp = async (title,text) => {
    let result = null;
    linkCss();
    $(".textBox__popUp__title").text(title);
    $(".textBox__popUp__text").text(text);
    containerPopUp.fadeIn(300);
};

/**
 * 
 * @description get to know confirm or cancel -获取“确认”还是“取消”
 * @author Hans
 */
TODO

let result = null;
containerPopUp > $(".button__confirm").on("click",() => {
    return new Promise((resolve,reject) => {

    })
    .then(() => {
        result = false;
    });
    return result;
});

containerPopUp > $(".button__cancel").on("click",() => {
    result = false;
});




export { popUp };