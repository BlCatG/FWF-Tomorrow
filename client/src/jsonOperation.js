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
    let get = (url) => {
        return new Promise((resolve,reject) => {
            $.getJSON(url,res => {
                    data = res;
                    resolve(data);
                }
            );
        })
    }
    let result = async function(method,url) {

            await get(url);

            data = method(data);        
  
            return data;
    }
    return result;
})();   


/**
 * @method jsonX -接收json操作方法
 * @param {function} method -传入的json操作方法
 * @param {string} url -要get的json地址
 */
let jsonX = (method,url) => {
    load(method,url).then((data) => {
        console.log(data);
        //上传
    })
}


export { jsonX };