/** 
 * 
 * @module popUpSystem -弹窗系统
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
 * 
 * @method popUp -弹窗
 * @param {string} title -弹窗的标题
 * @param {string} text -弹窗的文本
 */

let popUp = (title,text) => {

    
    $(".textBox__popUp__title").text(title);
    $(".textBox__popUp__text").text(text);
    containerPopUp.fadeIn(300);

};



export {popUp};