import {popUp} from './popUp.js';

/**
 * 初始化测试页面
 * @author Hans
 */


/**
 * 添加事件监听，点击调用popUp()
 */
$("#button-test").on("click", () => {
    
    popUp($("#input-test-title").val(),$("#input-test-text").val());

});