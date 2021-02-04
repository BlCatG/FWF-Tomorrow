/** 
 * 
 * @module popUpSystem
 * @description 弹窗系统
 * @author Hans
 * 
 */





let result = null;



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


    containerPopUp > $(".button__confirm").on("click",() => {
        result = true;
    });
    
    containerPopUp > $(".button__cancel").on("click",() => {
        result = false;
    });

    containerPopUp.fadeOut(0).appendTo($("body"));

    containerPopUp > $(".button__basis").on("click", function() {
        containerPopUp.fadeOut(300,() => {
        });
    });

/**
 * @description dynamically link css files -动态引入css文件
 * @author Hans
 * 这里有一个bug，重复生成link标签
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

let popUp = (title,text) => {

    linkCss();
    $(".textBox__popUp__title").text(title);
    $(".textBox__popUp__text").text(text);
    containerPopUp.fadeIn(300);
    //TODO 可传入两个函数，确认时做什么，取消时做什么

};
export { popUp,result as popUpResult };