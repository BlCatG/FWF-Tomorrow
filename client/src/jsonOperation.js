/**
 * @module jsonOperation -json操作模块
 * @author Hans
 * 
 * 
 * 为与服务器实时同步，操作完成后立即上传
 */

/**
 * 这是一个闭包
 */
let load = (function() {
    let data = null;
    let get = () => {
        return new Promise((resolve,reject) => {
            $.getJSON("../test-Hans/test.json",res => {
                    data = res;
                    resolve();
                }
            );
        })
    }
    let result = async function(method) {

            await get();

            data = method(data);        
  
            return data;
    }
    return result;
})();


/**
 * @method jsonX -接收json操作方法
 * @param {functoin} method -传入的json操作方法
 */
let jsonX = (method) => {
    load(method).then((data) => {
        //上传
    })
}


export { jsonX };